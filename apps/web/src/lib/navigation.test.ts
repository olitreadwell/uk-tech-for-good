import { describe, expect, it } from 'vitest';

import { footerNav, primaryNav } from '@/lib/navigation';

describe('navigation config', () => {
  it('keeps every primary destination in the footer', () => {
    const footerHrefs = new Set(footerNav.flatMap((group) => group.links.map((link) => link.href)));
    for (const link of primaryNav) expect(footerHrefs.has(link.href)).toBe(true);
  });

  it('does not duplicate links inside a footer group', () => {
    for (const group of footerNav) {
      const hrefs = group.links.map((link) => link.href);
      expect(new Set(hrefs).size).toBe(hrefs.length);
    }
  });
});
