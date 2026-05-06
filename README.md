# Star Wars Nuggets Search Tool

A modern Chrome extension for quickly searching **Star Wars Nuggets** videos, YouTube, Google, and Wookieepedia from one fast popup.

This is a direct upgrade for the original `YouTubeSearchChromeExtension` repository. It keeps the original idea — searching your YouTube channel videos — but updates the extension to Manifest V3 and adds a polished interface, saved history, settings, latest-video feed loading, context-menu search, and omnibox support.

## What changed

- Upgraded from **Manifest V2** to **Manifest V3**.
- Replaced `browser_action` with the modern `action` API.
- Split inline HTML/CSS/JavaScript into separate extension-safe files.
- Replaced the old Google Feed / YouTube GData code with the modern YouTube RSS uploads feed.
- Added local Chrome storage for settings and search history.
- Added search targets:
  - Star Wars Nuggets channel search
  - YouTube search
  - Google search
  - Wookieepedia search
- Added shortcuts in the search box:
  - `!sw clone wars` searches the channel
  - `!yt clone wars` searches all YouTube
  - `!g clone wars` searches Google
  - `!w clone wars` searches Wookieepedia
- Added right-click context menu search for selected text.
- Added omnibox keyword search: type `swn`, press Space/Tab, then enter your search.
- Added keyboard shortcut: `Ctrl+Shift+Y` / `Command+Shift+Y` opens the popup.
- Added a settings/options page.
- Added light/dark theme support.
- Added improved search history with run/remove/clear actions.
- Added local icons and local placeholder fan art.

## Repository files

```text
.
├── manifest.json
├── extension.html
├── style.css
├── app.js
├── feed.js
├── background.js
├── options.html
├── options.js
├── icon.png
├── icon.jpg
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── assets/
    └── fan-art.svg
```

## Install locally

1. Download or clone this repository.
2. Open Chrome.
3. Go to `chrome://extensions`.
4. Turn on **Developer mode**.
5. Click **Load unpacked**.
6. Select the repository folder.
7. Pin the extension if you want it visible in the toolbar.

## How to use

Click the extension icon, enter a query, choose a search target, and press **Search**.

Examples:

```text
lightsaber duel
!yt darth vader explained
!g star wars timeline
!w ahsoka tano
```

You can also highlight text on any webpage, right-click it, and search it through the extension menu.

## Customising the channel

Open the extension options page and change:

- Channel name
- YouTube channel ID
- Default search target
- Theme

The default channel ID is:

```text
UClz3lLJyDq5Jh1-Ete2JmJA
```

## Permissions

The extension uses a small set of permissions:

- `storage` — saves settings and search history locally in Chrome.
- `tabs` — opens searches in a new tab.
- `contextMenus` — adds right-click selected-text search.
- `https://www.youtube.com/*` host permission — loads the public YouTube uploads RSS feed.

## Development notes

This version avoids inline scripts and remote JavaScript. All extension logic is packaged locally in the repository.

Useful files:

- `manifest.json` — Chrome extension configuration.
- `extension.html` — popup interface.
- `app.js` — popup behaviour, search, history, settings modal.
- `feed.js` — latest YouTube uploads loader.
- `background.js` — service worker for context menus and omnibox search.
- `options.html` / `options.js` — options page.

## License

Keep the original repository license unless you intentionally change it.
