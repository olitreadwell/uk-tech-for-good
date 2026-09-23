# UK Tech-for-Good

A directory of UK organisations, projects, networks, and people who use
technology for public good.

[![CI](https://github.com/olitreadwell/uk-tech-for-good/actions/workflows/ci.yml/badge.svg)](https://github.com/olitreadwell/uk-tech-for-good/actions/workflows/ci.yml)
[![Entries](https://img.shields.io/github/directory-file-count/olitreadwell/uk-tech-for-good/data/entries?type=file&extension=yaml&label=entries&color=brightgreen)](GUIDE.md)
[![License: MIT (code) / CC-BY-SA-4.0 (data)](https://img.shields.io/badge/license-MIT%20%2F%20CC--BY--SA--4.0-blue)](#use-the-data)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)](#add-an-organisation--contribute)

## Contents

- [What this is](#what-this-is)
- [Status](#status)
- [Add an organisation / contribute](#add-an-organisation--contribute)
- [Use the data](#use-the-data)
- [How it's maintained](#how-its-maintained)
- [Get involved](#get-involved)
- [Related directories and further reading](#related-directories-and-further-reading)
- [For developers](#for-developers)

## What this is

A living, community-maintained directory of UK groups working in open data,
civic tech, climate tech, accessibility, digital inclusion, and more. Each
entry is a short, plain-language description with links, verified against a
live source.

It's for people looking for UK tech-for-good groups to work with, volunteer
with, or learn from. It's also for anyone mapping out who's doing what in
this space.

"Tech-for-good" here means technology used for a public benefit:
not-for-profit, government, community, or mission-led work, rather than
purely commercial products. UK organisations only.

## Status

**Early. 34 entries, added on 2026-09-23 and not yet re-checked.**

Each of those entries was read off the organisation's own homepage on the
day it was added, and the `source` field on each one records which page was
read. Nothing here has been reviewed by a second person yet, and whole
domains are still empty. [docs/known-gaps.md](docs/known-gaps.md) lists what
is missing.

The tooling and site come from
[nz-tech-for-good](https://github.com/olitreadwell/nz-tech-for-good), with
the New Zealand data removed and the NZ-specific parts of the taxonomy
replaced with UK ones (see [Regions](#regions)).

The website is not deployed yet. The Next.js app builds cleanly and passes
its tests, but the Vercel build fails at the upload step, which is the same
failure the NZ repos have been hitting. Until that is sorted, the directory
is the YAML in `data/entries/`, [GUIDE.md](GUIDE.md), and the exports under
`data/exports/`.

### Domains

Entries are grouped by domain, the area of public good an organisation works
in. The list is inherited from the NZ directory and is checked by
`scripts/validate.py`:

- Open Data
- Civic Tech
- Digital Inclusion
- Green and Climate Tech
- Disability and Accessibility Tech
- Makerspaces and Hackerspaces
- GovTech
- Tech Ethics and Responsible AI
- Education Equity Tech
- Mental Health Tech
- Housing and Homelessness Tech
- Legal Aid and Justice Tech
- Human Rights Tech
- Crisis and Humanitarian Tech
- Environmental Citizen Science
- Food Rescue and Food Security Tech
- Financial Inclusion and Fintech for Good
- Volunteering and Giving Platforms
- Worker and Platform Co-ops
- Nonprofit and NGO Tech
- Journalism and Media Tech
- Research and Education Tech
- Refugee and Migrant Support Tech
- Disability Employment Tech

## Add an organisation and contribute

Know a group that should be listed? There are two ways to add one, and
neither needs any coding for the first:

1. **[Suggest an entry](../../issues/new?template=add-entry.yml)**: fill in
   a short issue form with what you know. Someone will verify it and add it.
2. **Open a pull request**: copy `data/entry.template.yaml` to
   `data/entries/<slug>.yaml`, fill it in, and submit. Full steps are in
   [CONTRIBUTING.md](CONTRIBUTING.md).

Every entry must be verified against a live source before it's added.
**Never invent a fact**: leave a field empty rather than guess.

## Use the data

The raw data lives in [`data/entries/`](data/entries/): one YAML file per
entry, shaped by [`schema/entry.schema.json`](schema/entry.schema.json).
[`GUIDE.md`](GUIDE.md) is generated from these files, so if you want the
structured version for your own tooling (a search index, a map, and so on),
read the YAML directly.

- **Code** (scripts, schema, tooling) is [MIT licensed](LICENSE).
- **Data** (the directory entries) is
  [CC-BY-SA-4.0 licensed](LICENSE-DATA.md): reuse and share it, including
  commercially, as long as you credit this project and share alike.

### Machine-readable data

If you'd rather not parse YAML, the whole directory is also exported as
[`data/exports/entries.json`](data/exports/entries.json) (one JSON object
per entry) and [`data/exports/entries.csv`](data/exports/entries.csv) (the
same data flattened to columns), both regenerated from `data/entries/` by
`scripts/export.py` and kept in sync by CI.

### Regions

Each entry records a UK region, or `national` if it works across the
country: `london`, `south-east`, `south-west`, `east-of-england`,
`east-midlands`, `west-midlands`, `yorkshire-and-the-humber`, `north-east`,
`north-west`, `wales`, `scotland`, `northern-ireland`. The list lives in
[`schema/entry.schema.json`](schema/entry.schema.json); open an issue if a
region is missing.

## How it's maintained

- Links are checked automatically every week
  ([`.github/workflows/linkcheck.yml`](.github/workflows/linkcheck.yml)); a
  tracking issue opens on genuine dead links and closes when they recover.
- Every entry website is archived to the Wayback Machine every week
  ([`.github/workflows/wayback.yml`](.github/workflows/wayback.yml)); the
  snapshot URLs are recorded in `data/archives.json`.
- `GUIDE.md` is regenerated from the YAML entries, so it stays in sync with
  the underlying data. CI fails a PR if it's out of date.
- Accuracy comes first: every entry is verified against a live source, and
  nothing is invented. See [CONTRIBUTING.md](CONTRIBUTING.md) for the rules.
- This directory lists **public professional information only**. It does not
  list named people yet: see [docs/known-gaps.md](docs/known-gaps.md) for why,
  and how to help close that gap.

## Get involved

This directory answers what exists. These routes answer what to do next,
each one checked on 2026-09-23:

- **[Tech for Good Organisers Network](https://techforgoodorganisers.uk)**:
  connects local tech-for-good meetup communities across the UK and
  Ireland. Email the coordinator, get added to the Slack, get a calendar
  invite to the next monthly meetup.
- **[Civic Tech Field Guide](https://civictech.guide)**: projects,
  organisations, and community channels worldwide, including a directory of
  Slacks, Discords, and Teams with open join links.
- **[Catchafire](https://www.catchafire.org)**: a skilled volunteering
  marketplace where nonprofits post short projects and professionals pick
  one up.

[`docs/research-get-involved.md`](docs/research-get-involved.md) has the
full comparison of how these sites onboard newcomers, and the backlog for
bringing the same routes into this directory.

## Related directories and further reading

Other UK places to find open data, tech-for-good, and accessibility work.
Every link below was checked and resolves:

- **[data.gov.uk](https://www.data.gov.uk)** is the UK government's open data
  catalogue: public datasets published across government.
- **[Office for National Statistics](https://www.ons.gov.uk)** is the UK's
  official statistics agency, publishing data on people, the economy, and the
  environment.
- **[Open Data Institute](https://theodi.org)** is a UK non-profit that
  researches and advises on the use of open data.
- **[OpenUK](https://openuk.uk)** is a not-for-profit that supports open
  technology and open data work across the UK.
- **[NCVO](https://www.ncvo.org.uk)** is the national membership body for
  voluntary organisations in England.
- **[Digital Poverty Alliance](https://digitalpovertyalliance.org)** works on
  the practical side of digital exclusion: devices, connectivity, and skills.
- **[GOV.UK accessibility requirements](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)**
  sets out the accessibility rules public sector websites and apps must meet.
- **[Government Digital Service](https://www.gov.uk/government/organisations/government-digital-service)**
  builds and sets standards for UK public services online.
- **[Nesta](https://www.nesta.org.uk)** is an innovation foundation that
  funds and researches public-interest technology.
- **[Doteveryone](https://www.doteveryone.org.uk)** researched how technology
  affects people in the UK and published practical guides for responsible
  technology.

Know a directory, registry, or community hub that belongs here? Please
[open an issue](../../issues/new) or a pull request.

## For developers

Clone the repo and set up the scripts used to validate and regenerate the
directory:

```bash
git clone https://github.com/olitreadwell/uk-tech-for-good.git
cd uk-tech-for-good
pip install -r requirements.txt

python3 scripts/validate.py      # check entries against the schema
python3 scripts/build_guide.py   # regenerate GUIDE.md from data/entries/
python3 scripts/linkcheck.py     # optional: check all links for dead ones
python3 scripts/archive_wayback.py --dry-run  # preview Wayback archives
```

Run both `validate.py` and `build_guide.py` after adding or editing an
entry, and commit the regenerated `GUIDE.md`. CI fails a PR if it's out of
date. Full contribution steps, including commit message style, are in
[CONTRIBUTING.md](CONTRIBUTING.md).

The site is a Next.js app in `apps/web`. Deploys are manual: `cd apps/web &&
vercel --prod` (see [docs/deploy.md](docs/deploy.md)). Pushes never deploy on
their own.

## How it started

The tooling and site were derived from
[nz-tech-for-good](https://github.com/olitreadwell/nz-tech-for-good) by
[Oli Treadwell](https://github.com/olitreadwell), which was itself built with
AI-assisted research and human verification of every entry. This repo is open
for the community to seed, correct, and maintain.

Shared tooling is kept in sync from
[olitreadwell/template](https://github.com/olitreadwell/template) by
`.github/workflows/template-sync.yml`; see
[docs/template-sync.md](docs/template-sync.md) for which files are managed
that way.

## People and privacy

If you're listed here and want your information corrected or removed, please
[open an issue](../../issues/new) and we'll action it. This takes priority
over completeness.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/olitreadwell"><img src="https://github.com/olitreadwell.png?s=100" width="100px;" alt="Oli Treadwell"/><br /><sub><b>Oli Treadwell</b></sub></a><br /><a href="https://github.com/olitreadwell/uk-tech-for-good/commits?author=olitreadwell" title="Code">💻</a> <a href="https://github.com/olitreadwell/uk-tech-for-good/commits?author=olitreadwell" title="Documentation">📖</a> <a href="#data-olitreadwell" title="Data">🔣</a> <a href="#design-olitreadwell" title="Design">🎨</a> <a href="#ideas-olitreadwell" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-olitreadwell" title="Maintenance">🚧</a> <a href="#projectManagement-olitreadwell" title="Project Management">📆</a> <a href="https://github.com/olitreadwell/uk-tech-for-good/pulls?q=is%3Apr+reviewed-by%3Aolitreadwell" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
