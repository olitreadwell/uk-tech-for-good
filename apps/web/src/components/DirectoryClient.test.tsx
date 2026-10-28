import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import DirectoryClient from '@/components/DirectoryClient';
import type { Entry } from '@/lib/data';

function makeEntry(index: number, overrides: Partial<Entry> = {}): Entry {
  return {
    slug: `org-${index}`,
    name: `Organisation ${String(index).padStart(2, '0')}`,
    domain: 'civic-tech',
    domainLabel: 'Civic Tech',
    what: 'Civic technology work',
    region: index % 2 === 0 ? 'london' : 'national',
    website: 'https://example.org',
    github: '',
    linkedin_org: '',
    community_url: '',
    events_url: '',
    tags: [],
    related_to: [],
    source: 'test',
    founding_year: 2020,
    takes_contributors: null,
    careers_url: '',
    last_verified: '2026-10-01',
    ...overrides,
  };
}

const entries = Array.from({ length: 25 }, (_, index) => makeEntry(index + 1));
const domains = [{ key: 'civic-tech', label: 'Civic Tech', slug: 'civic-tech', count: 25 }];
const regions = [
  { name: 'london', slug: 'london', count: 12 },
  { name: 'national', slug: 'national', count: 13 },
];

describe('DirectoryClient', () => {
  afterEach(cleanup);

  beforeAll(() => {
    window.history.replaceState(null, '', '/uk-tech-for-good/directory');
  });

  it('restores filters and page size from the URL', () => {
    window.history.replaceState(
      null,
      '',
      '/uk-tech-for-good/directory?q=Organisation%2001&region=london&sort=name-desc&per_page=40'
    );
    render(<DirectoryClient entries={entries} domains={domains} regions={regions} />);
    expect(screen.getByLabelText('Search entries')).toHaveValue('Organisation 01');
    expect(screen.getByLabelText('Filter by region')).toHaveValue('london');
    expect(screen.getByLabelText('Entries per page')).toHaveValue('40');
    expect(screen.getByText('Recently verified')).toBeInTheDocument();
  });

  it('does not crash when the query contains regex metacharacters', () => {
    window.history.replaceState(null, '', '/uk-tech-for-good/directory');
    render(<DirectoryClient entries={entries} domains={domains} regions={regions} />);
    fireEvent.change(screen.getByLabelText('Search entries'), {
      target: { value: '[(' },
    });
    expect(screen.getByText(/No organisations match those filters/)).toBeInTheDocument();
  });

  it('writes shareable filter state back to the URL', () => {
    window.history.replaceState(null, '', '/uk-tech-for-good/directory');
    render(<DirectoryClient entries={entries} domains={domains} regions={regions} />);
    fireEvent.change(screen.getByLabelText('Search entries'), {
      target: { value: 'Organisation 02' },
    });
    expect(window.location.search).toContain('q=Organisation+02');
  });

  it('clears filters and focuses search on Escape', () => {
    window.history.replaceState(null, '', '/uk-tech-for-good/directory?q=civic');
    render(<DirectoryClient entries={entries} domains={domains} regions={regions} />);
    const search = screen.getByLabelText('Search entries');
    expect(search).toHaveValue('civic');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(search).toHaveValue('');
    expect(search).toHaveFocus();
  });

  it('clamps a page that is now beyond the filtered results', async () => {
    window.history.replaceState(null, '', '/uk-tech-for-good/directory');
    render(<DirectoryClient entries={entries} domains={domains} regions={regions} />);
    expect(screen.getByText('Page 1 of 2')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Next/ }));
    expect(screen.getByText('Page 2 of 2')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Search entries'), {
      target: { value: 'Organisation 01' },
    });
    expect(await screen.findByText('1 of 25')).toBeInTheDocument();
    expect(screen.queryByText(/Page 2 of 2/)).not.toBeInTheDocument();
  });
});
