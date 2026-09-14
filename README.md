# Buddhism Interactive Reading Library

An interactive Traditional Chinese reading library for Buddhist sutras, classical prose, poetry, and related stories.

## Features

- Diamond Sutra and Heart Sutra readers
- Sentence-level hover and click explanations
- Chapter navigation and keyboard shortcuts
- Single-chapter and continuous-scroll views
- Collapsible table of contents and explanation panel
- Light, dark, and system themes
- Global Traditional Chinese and Simplified Chinese preference
- Responsive desktop and mobile layout

## Architecture

- `app.js` — shared reader module and interaction logic
- `styles.css` — shared reader design
- `language.js` — shared Traditional/Simplified Chinese preference and conversion
- `data/diamond-sutra.json` — Diamond Sutra content
- `data/heart-sutra.json` — Heart Sutra content
- `diamond-sutra/` and `heart-sutra/` — thin reader entry pages

Serve the directory with a local web server, or visit the GitHub Pages site.
