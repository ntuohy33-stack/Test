# Church forms: sources

The four downloadable PDFs in `../forms/` are built from the `.dc.html` files here (exported from Claude Design). The PDFs contain real, selectable text and are tagged for screen readers.

To change wording: edit the text inside the matching `.dc.html` (it is plain HTML), then rebuild:

1. Once only: `npm install playwright` and `npx playwright install chromium`
2. Put `IvyMode-Regular.woff2` in `../fonts/` (it is deliberately not in the public repository)
3. In this folder run `node build-forms.js`

The PDFs in `../forms/` are overwritten. Check each page still fits (the script warns if a page overflows), then upload the site again.

Metropolis (the body font) is included in `fonts/` and is free to use (public domain, see its licence file). This folder is not part of the website upload.
