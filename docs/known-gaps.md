# Known gaps

## The directory was seeded from a scaffold (2026-09-23)

This repo started as a copy of
[nz-tech-for-good](https://github.com/olitreadwell/nz-tech-for-good) with the
New Zealand data removed. The first 34 entries were added on 2026-09-23, all
of them UK organisations whose own websites were checked that day.

That first pass is a starting point, not a finished directory. It leans
towards organisations with open data, civic technology, and digital rights
in their stated mission, because those are the easiest to verify from a
homepage alone. Whole domains are still empty.

## Thin and empty domains

`scripts/coverage.py` reports per-domain counts. As of 2026-09-23, these
domains have no entries at all:

- crisis / humanitarian-tech
- disability employment tech
- environmental citizen-science
- food-rescue / food-security tech
- makerspaces / hackerspaces

Other domains have one or two entries. Those are the places where a
suggestion is worth most.

## Entries that are hard to verify

A homepage alone does not prove an organisation is active or that a fact is
current. Where a claim could not be read off a live page, the field was left
empty rather than guessed. That is why most entries here have
`founding_year: null` and `takes_contributors: null`.

## People / LinkedIn enrichment

No entry currently has `linkedin_people` filled in, even though the schema
supports it (`name`, `role`, `linkedin_url` per person). This is a gap in the
data, not an oversight in the tooling.

Finding accurate people-to-organisation links reliably needs either an
authenticated LinkedIn search tool or a careful read of each organisation's
team page. Public search and unauthenticated scraping return unreliable or
stale results for this kind of query.

**If you want to help close this gap:**

- Only add a person if you can verify their name, role, and LinkedIn URL
  against a real, current source (their own LinkedIn profile, or the
  organisation's team page).
- Follow the [People and privacy](../CONTRIBUTING.md#people-and-privacy)
  rules in CONTRIBUTING.md: public professional information only.
- Add entries to the `linkedin_people` list on the relevant YAML file, then
  run `scripts/validate.py` and `scripts/build_guide.py` as usual.
