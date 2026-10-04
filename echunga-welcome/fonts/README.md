# Brand fonts

The site is set up to use the brand guide fonts. Web-font files (`.woff2`) placed in this folder with **exactly** these names are picked up automatically. Nothing else needs changing.

| Brand font | Used for | Files | Status |
| --- | --- | --- | --- |
| **IvyMode** (Regular) | Headings, the church name in the menu, large text | `IvyMode-Regular.woff2` | Converted and tested. Kept out of version control (see below) |
| **Metropolis** | Body text, menu, buttons | `Metropolis-Regular.woff2` (400), `Metropolis-Medium.woff2` (500), `Metropolis-SemiBold.woff2` (600), `Metropolis-Bold.woff2` (700) | **Done.** Included in this folder (latin subset, from the Fontsource package). It is free to use; the licence copy is `Metropolis-LICENSE.txt` |

Until the IvyMode file is added to the folder you publish from, the site shows a free look-alike (Cormorant Garamond), so nothing looks broken. Metropolis needs nothing more.

**Not used yet:** the secondary fonts, Carentro and Garet Book.

## Licences

- **IvyMode** is © Ivy Foundry and sold through Type Network (store.typenetwork.com). Its file allows embedding technically, but that is not the same as permission. Putting it on a website needs a **web-font licence**. The church has confirmed it holds a licence for IvyMode. `.gitignore` keeps IvyMode, Carentro and Garet files out of this repository, because the repository is public and anyone could download them from it. Add these files to the folder you publish from (or to a private repository), not here.
- **Metropolis** is free to use and share, including in this repository. The Fontsource package it came from is marked as public domain (the Unlicense), and a copy of that licence is in this folder.
- **Carentro and Garet** appear to be commercial. Check for web licences before using them.

I can't confirm licence terms from here, so please treat this as a prompt to check.

## Converting files

If you only have `.ttf` or `.otf` files, they can be converted to `.woff2` with any free converter, or send them to me and I'll convert them.
