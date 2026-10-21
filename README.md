# Playbook Studio

A local-first guide creator for structured technical and operations documentation. Inspired by the layouts used in *The Playbook*.

## Use

Open `index.html` in a browser, or publish the repository through GitHub Pages. No build tools, packages, backend, or accounts are required.

## Features

- Structured reusable guide blocks and reordering
- Text and image editing
- Browser-local storage (IndexedDB)
- JSON guide backup/export and import
- Print / Save as PDF through the browser

## Publish on GitHub Pages

1. Upload `index.html` and `README.md` to the root of a public repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose **main** and **/(root)**, then save.
5. Visit the Pages URL shown in repository settings after deployment.

## Local data and backups

Guides are saved **only in the browser/device** you use. GitHub Pages hosts the app, not its saved data. Regularly export editable JSON backups. Clearing browser website data or using another device will not restore local guides automatically.

## Security

Avoid placing passwords, access tokens, or other credentials in published guide text. GitHub Pages is public for public repositories.

## Version 0.2
Improved print styles, rich-text block editing, static embedded logo, top-aligned images, and debounced layout updates.