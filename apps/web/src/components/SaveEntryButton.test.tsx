import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { SaveEntryButton } from '@/components/SaveEntryButton';

describe('SaveEntryButton', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(cleanup);

  it('saves and unsaves an entry in local storage', () => {
    render(<SaveEntryButton slug="alpha" name="Alpha Org" />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(JSON.parse(localStorage.getItem('saved-entries') ?? '[]')).toEqual(['alpha']);
    expect(button).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(button);
    expect(JSON.parse(localStorage.getItem('saved-entries') ?? '[]')).toEqual([]);
  });

  it('explains when browser storage rejects the save', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('quota');
    });
    render(<SaveEntryButton slug="alpha" name="Alpha Org" />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('alert')).toHaveTextContent('storage is full');
    vi.restoreAllMocks();
  });
});
