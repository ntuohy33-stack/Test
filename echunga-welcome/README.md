# Echunga Family Church: welcome site

A single-page site (plain HTML, CSS and a little JavaScript). There is nothing to build or install, and it needs no database or server software.

## What's in this folder

| File | Purpose |
| --- | --- |
| `index.html` | The whole site: all wording, styles and behaviour |
| `logo.jpg` | Church logo |
| `photo-1.jpg` to `photo-8.jpg` | Gallery photos |
| `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | Browser tab and phone home-screen icons |
| `share-card.jpg` | Preview image when the link is shared (Facebook, messages) |

**To publish:** upload the *contents* of this folder to any web host, keeping the files together in one folder.

## Hosting options

Any of these works. Each serves a static site well, and the free tiers are ample for a church site.

- **GitHub Pages**: free, deploys straight from this repository.
- **Cloudflare Pages** or **Netlify**: free, drag-and-drop upload or connect the repository.
- **Ordinary web hosting** (cPanel or similar): upload the files by FTP or the file manager.

Use HTTPS (all of the above provide it free). The contact form and copy buttons work best on a secure address.

## Pointing the current site at the new one

The Uniting Church SA site can redirect to the new address (a "301 redirect"). If the church has its own domain name, you can point that domain at the new host instead, and a redirect isn't needed. Ask the host for their DNS instructions once you've chosen one.

### Old page addresses

Two pages from the old site now live as sections of this page:

| Old address | New address |
| --- | --- |
| `/resources/` | `/#resources` |
| `/activities/` | `/#activities` |

When setting up redirects, send those two as above and everything else to the home page. The events calendar is on Elvanto (`echungauniting.elvanto.com.au/calendar/`), and the Activities section links to it directly.

## Things to finish once the address is known

1. In `index.html`, near the top, set the share-preview image to the full address (see the `TODO` comment), and add an `og:url` line.
2. Test the "Send message" form on the live site. It opens the visitor's email app, addressed to `info@echunga.ucasa.org.au`, because a static site cannot receive form posts on its own. For in-page submission you'd add a form service.
3. Check "Watch the livestream" opens the YouTube channel.
4. The public name is **Echunga Family Church**. The only remaining "Echunga Uniting Church" is the bank *Account Name* in the Give section, which must match how the account is registered, so check it with the treasurer before ever changing it.

## Editing the wording

Open `index.html` in any text editor. Each section is marked with a comment (`<!-- Plan your visit -->`, `<!-- Contact -->` and so on), and the text sits in plain paragraphs. Service times and the address appear in the page header, the "Sunday Worship" card, the contact section and the footer, so change all four together.

Fonts (Cormorant Garamond and Jost) load from Google Fonts. If that's ever blocked, the page falls back to standard fonts and stays readable.

## Accessibility and motion

- People who have "reduce motion" switched on see a still image in place of the animated hills.
- The animation pauses when off-screen or in a background tab.
- Photos have descriptive alt text, and all interactive elements are keyboard-reachable.
