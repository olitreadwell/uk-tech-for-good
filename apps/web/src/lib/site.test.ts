import { describe, expect, it } from 'vitest';

import { getBasePath, getSiteUrl, withBasePath } from '@/lib/site';

describe('site URLs', () => {
  it('mounts UK pages under the GitHub Pages base path', () => {
    expect(getBasePath()).toBe('/uk-tech-for-good');
    expect(withBasePath('/directory')).toBe('/uk-tech-for-good/directory');
    expect(withBasePath('/')).toBe('/uk-tech-for-good');
  });

  it('builds absolute URLs for sitemap and feed metadata', () => {
    expect(getSiteUrl('/feed.xml')).toBe(
      'https://olitreadwell.github.io/uk-tech-for-good/feed.xml'
    );
    expect(getSiteUrl('/')).toBe('https://olitreadwell.github.io/uk-tech-for-good');
  });
});
