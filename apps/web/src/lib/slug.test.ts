import { describe, expect, it } from 'vitest';

import { toSlug } from '@/lib/slug';

describe('toSlug', () => {
  it('lowercases and hyphenates names', () => {
    expect(toSlug('Housing & Homelessness Tech')).toBe('housing-homelessness-tech');
  });

  it('trims leading and trailing separators', () => {
    expect(toSlug('  North West!  ')).toBe('north-west');
  });

  it('leaves no regex metacharacters that could break a URL', () => {
    expect(toSlug('Data (Gov) [UK] + friends?')).toBe('data-gov-uk-friends');
  });
});
