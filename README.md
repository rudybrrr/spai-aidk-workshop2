# SPAI AI Don’t Know Workshop 2

Beginner-friendly workshop on data analytics and visualisation.

## Workshop information

- Topic: Data Analytics and Visualisation
- Date: 22 July
- Time: 3pm to 5pm
- Audience: Mostly Year 1 beginners
- Speakers: Alson and Murugan

## Repository purpose

This repository will contain:

- Interactive workshop slides
- Attendee notebook
- Completed speaker notebook
- Workshop assets
- Setup instructions

## Source-of-truth hierarchy

1. `AIDK_W2_Content_Document_Updated.md` controls workshop content.
2. `slides.md` controls slide design and implementation.
3. `AGENTS.md` contains repository-level operating rules.

## Current status

> Repository scaffolded from Workshop 1. Workshop 2 slide content and notebooks have not been implemented yet. Do not deploy the inherited Workshop 1 deck as Workshop 2.

The inherited Workshop 1 deck remains temporarily as an implementation reference and must be replaced before deployment.

## JavaScript setup

This is a no-framework static HTML, CSS, and JavaScript slide deck managed with npm.

```bash
npm install
npm run dev
npm run build
```

`npm run build` validates the inherited static deck; it does not create a compiled bundle. The existing focused checks can also be run directly:

```bash
npm run check:alignment
npm run check:standalone-visuals
```

## Python setup

macOS and Linux:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Windows:

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

## Expected future files

The following notebooks will be created in a later task; they do not exist yet:

```text
notebooks/AIDK_W2_Workshop.ipynb
notebooks/AIDK_W2_Workshop_Completed.ipynb
```
