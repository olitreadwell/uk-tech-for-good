import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { MapClient } from '@/app/map/MapClient';

const entries = [
  {
    slug: 'alpha',
    name: 'Alpha Org',
    domainLabel: 'Civic Tech',
    region: 'london',
    what: 'Community mapping',
    tags: ['maps'],
  },
  {
    slug: 'beta',
    name: 'Beta Org',
    domainLabel: 'Open Data',
    region: 'national',
    what: 'Open datasets',
    tags: ['data'],
  },
];

describe('MapClient', () => {
  afterEach(cleanup);

  it('renders search results as React links rather than injected HTML', () => {
    render(<MapClient entries={entries} />);
    fireEvent.change(screen.getByPlaceholderText('Search entries...'), {
      target: { value: 'dataset' },
    });
    const link = screen.getByRole('link', { name: 'Beta Org' });
    expect(link).toHaveAttribute('href', '/entry/beta');
  });

  it('shows region counts and a selected-region control', () => {
    render(<MapClient entries={entries} />);
    expect(screen.getAllByText('london').length).toBeGreaterThanOrEqual(1);
    fireEvent.click(screen.getAllByRole('button', { name: /london/ })[0]);
    expect(screen.getAllByRole('button', { name: /london/ })[0]).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });
});
