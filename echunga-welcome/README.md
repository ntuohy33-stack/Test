# Echunga Family Church website

A small static site: plain HTML, one stylesheet and one script. There is nothing to build or install, and it needs no database or server software.

## Pages

| Address | Page | Contents |
| --- | --- | --- |
| `/` | Home | Welcome, about, photo gallery, Plan Your Visit |
| `/about/` | About | Our Story, Vision & Mission, Meet our Minister |
| `/activities/` | Activities | Craft, Cuppa & Cards, coffee groups, Life Groups, other events |
| `/resources/` | Resources | Sermons, newsletter, books, a place to begin, get involved |
| `/contact/` | Contact | Contact form and details, and Give Online |
| `/beliefs/` | Statement of Beliefs | The 20 statements of belief, grouped by theme (in the About menu) |
| `/safe-church/` | Safe Church | Our commitment, how to raise a concern (with phone numbers), and the Uniting Church SA framework (in the About menu) |

The menu on every page is: **About** (Our Story, Vision, Our Minister, Statement of Beliefs, Safe Church), **Activities**, **Resources**, **Contact**, **Members** (opens the Elvanto portal). Plan Your Visit is on the home page.

## What's in this folder

| File | Purpose |
| --- | --- |
| `index.html`, `about/`, `activities/`, `resources/`, `contact/`, `beliefs/` | The seven pages (each folder holds an `index.html`) |
| `styles.css` | All the design, shared by every page |
| `site.js` | Shared behaviour: the animated hills, phone menu, contact form, copy buttons |
| `_redirects` | Old-address redirects (see below) |
| `logo.jpg`, `photo-1.jpg` to `photo-8.jpg` | Logo and gallery photos |
| `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | Browser tab and phone home-screen icons |
| `share-card.jpg` | Preview image when a link is shared (Facebook, messages) |

**To publish:** upload the *contents* of this folder to any web host, keeping the folder structure exactly as it is.

**To view it on your own computer:** the menu links point at folders, so double-clicking `index.html` won't follow them. Run `python3 -m http.server` inside this folder and open `http://localhost:8000`, or just publish it to a host.

## Brand

The colours and fonts follow the church brand guide. The palette is at the top of `styles.css`.

- **Primary colours:** sage `#97A762`, teal `#5C8D88`, gold `#E3B45D`, clay `#A8845B`.
- **Secondary colours used:** olive `#808A4E` (large headings), light gold `#E2BF80`, slate `#9BA4A8`. The dark `#2C2820` (footer and vision band) and warm off-white `#F7F5F2` (page background) match the old site's brand refresh.
- **Accessibility:** the brand olive and sage are too pale for small text, so small text, links and buttons use darker shades of the same colours (`--sage-deep`, `--clay-deep`). All text pairings pass WCAG AA contrast.
- **Fonts:** IvyMode (headings) and Metropolis (body) are wired in, and load from the `fonts/` folder once the files are added. Licensed font files are deliberately kept out of this public repository (see `.gitignore`), so they must be added to the folder you publish from. See `fonts/README.md` for the exact file names and licensing notes. Until then, free look-alikes are used.

## Hosting options

Any of these works. Each serves a static site well, and the free tiers are ample for a church site.

- **Cloudflare Pages** (recommended if you already have an account): free, drag-and-drop upload or connect a repository. Supports the `_redirects` file.
- **Netlify**: the same, and also supports `_redirects`.
- **GitHub Pages**: free, deploys from a repository. It ignores `_redirects` and needs the repository to be public on a free plan.
- **Ordinary web hosting** (cPanel or similar): upload the files by FTP or the file manager.

Use HTTPS (all of the above provide it free).

## Pointing the current site at the new one

Two situations:

1. **The old address is pointed at the new host** (the Uniting Church SA changes DNS, or forwards the whole address). Then `_redirects` handles the old page addresses automatically.
2. **The old site just redirects visitors to the new address.** The redirect is set on the old site's side. Ask them to send each old page to the matching new one:

| Old address | New address |
| --- | --- |
| `/welcome/` | `/about/` |
| `/activities/` | `/activities/` |
| `/resources/` | `/resources/` |
| `/contact-us/` | `/contact/` |
| `/newsletter/` | `/resources/` |
| `/gallery/` | `/` |
| anything else | `/` |

Old section links still land in the right place on the new pages: `/about/#weareUc` (Our Story), `/about/#meettheMinister`, `/about/#vision`, `/activities/#connectionPoints` and `/activities/#otherActivities`.

Not yet mapped: the old Events Calendar (`/events-calendar/`), Pastoral Support (`/community/#support`). The events calendar itself is on Elvanto, and the Activities page links to it.

## Things to finish once the address is known

1. The share-preview tags (`og:url` and `og:image` in the `<head>` of each of the seven pages) currently use the temporary address `echunga-family-churchpagesdev.ntuohy33.workers.dev`. When the final address is set, replace it on all seven pages (search for `workers.dev`), then re-upload. After the final address is live, switch off or redirect the temporary `workers.dev` address in Cloudflare so search engines don't list two copies of the site.
2. Test the "Send message" form on the live site. It opens the visitor's email app, addressed to `info@echunga.ucasa.org.au`, because a static site cannot receive form posts on its own. For in-page submission you'd add a form service.
3. Check "Watch the livestream", the Members link and the book links open correctly.
4. The public name is **Echunga Family Church**. The only remaining "Echunga Uniting Church" is the bank *Account Name* on the Contact page, which must match how the account is registered, so check it with the treasurer before ever changing it.

## Editing the wording

Open the page you want in any text editor. Each section is marked with a comment (`<!-- Plan your visit -->`, `<!-- Give -->` and so on), and the text sits in plain paragraphs.

- Service times and the address appear on the home page (hero, Sunday Worship card), the Contact page and every footer. Change them together.
- The home page's **This week's message** player shows the newest video from the church's YouTube channel and updates itself when a new video is uploaded. It is set by the channel ID in `index.html` (search for `videoseries`; the ID is also in a comment above it). If the player ever says the video is unavailable, check the ID in YouTube Studio under Settings, Channel, Advanced settings. If livestreams are scheduled in advance, the player may show the upcoming stream until it finishes.
- The **Safe Church page** shows safeguarding phone numbers (000, Child Abuse Report Line 13 14 78, Safe Church Committee (08) 8236 4248). They are set by the Uniting Church SA, so check them against https://sa.uca.org.au/safechurch/reporting-abuse every few months.
- The **menu and footer are repeated in all seven pages**. If you change a menu item, change it in each file.
- Colours and spacing are all in `styles.css`. The colour names are at the very top.

Fonts (Cormorant Garamond and Jost) load from Google Fonts. If that's ever blocked, the page falls back to standard fonts and stays readable.

## Accessibility and motion

- People who have "reduce motion" switched on see a still image in place of the animated hills.
- The animation pauses when off-screen or in a background tab.
- Photos have descriptive alt text, the menu works with a keyboard, and all interactive elements are reachable without a mouse.
