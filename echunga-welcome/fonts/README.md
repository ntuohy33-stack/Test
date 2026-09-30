# Brand fonts

The site is set up to use the brand guide fonts. Web-font files (`.woff2`) placed in this folder with **exactly** these names are picked up automatically. Nothing else needs changing.

| Brand font | Used for | Files | Status |
| --- | --- | --- | --- |
| **IvyMode** (Regular) | Headings, the church name in the menu, large text | `IvyMode-Regular.woff2` | Converted and tested. Kept out of version control (see below) |
| **Metropolis** | Body text, menu, buttons | `Metropolis-Regular.woff2` (400), `Metropolis-Medium.woff2` (500), `Metropolis-SemiBold.woff2` (600) | **Still needed.** The files supplied so far were Thin (100), which is too fine for body text |

Until a font's file is here, the site shows a free look-alike (Cormorant Garamond for IvyMode, Montserrat for Metropolis), so nothing looks broken.

**Not used yet:** the secondary fonts, Carentro and Garet Book.

## Licences

- **IvyMode** is © Ivy Foundry and sold through Type Network (store.typenetwork.com). Its file allows embedding technically, but that is not the same as permission. Putting it on a website needs a **web-font licence**. Please confirm one is in place. `.gitignore` keeps IvyMode, Carentro and Garet files out of this repository, because the repository is public and anyone could download them from it. Add these files to the folder you publish from (or to a private repository), not here.
- **Metropolis** is open-source (SIL Open Font License) and can be used and shared freely, including in this repository.
- **Carentro and Garet** appear to be commercial. Check for web licences before using them.

I can't confirm licence terms from here, so please treat this as a prompt to check.

## Getting the right Metropolis files

The files supplied were named like `metropolis-latin-100-normal.ttf`, which suggests they came from Fontsource. From the same place, download the **latin** subset in weights **400, 500 and 600, normal** (not italic). Send them over, or convert them to `.woff2` yourself, and add them to this folder.

## Converting files

If you only have `.ttf` or `.otf` files, they can be converted to `.woff2` with any free converter, or send them to me and I'll convert them.
