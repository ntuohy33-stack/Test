# Flowfield Studio

A tiny, dependency-free generative art toy. Open `index.html` in any browser and make something.

Thousands of particles ride an invisible noise field, leaving colored trails. You steer the look in real time.

## Use it

Just open the file:

```
open index.html      # macOS
xdg-open index.html  # Linux
```

No build, no install, no internet required — it's one HTML file.

## Controls

- **Drag / touch the canvas** to inject particles where you point.
- **Sliders** — particle count, field scale, speed, curl, trail fade, line weight.
- **Palettes** — six built-in color sets plus a **Custom** palette you edit with color pickers.
- **Reseed** for a brand-new field, **Clear** to wipe.
- **Save PNG** to keep a still frame.
- **Record video** captures live (tweak sliders while filming) and saves a `.webm`.
- **Fullscreen** (⛶ button, top-right) for a distraction-free canvas.

### Recording → GIF

Recording uses the browser's native `MediaRecorder`, so it saves **WebM** (or MP4 where supported)
with zero dependencies. To turn it into a GIF, drop the file into any converter — e.g.:

```
ffmpeg -i flowfield.webm -vf "fps=20,scale=720:-1:flags=lanczos" flowfield.gif
```

### Mobile

The control panel collapses behind a **☰** button on narrow screens, touch gestures drive the
canvas directly, and tapping the canvas dismisses the panel.

### Keyboard

| Key | Action |
|-----|--------|
| `Space` | play / pause |
| `R` | reseed the field |
| `C` | clear canvas |
| `S` | save PNG |
| `V` | start / stop video recording |
| `F` | toggle fullscreen |

## Recipes to try

- **Silky ribbons** — high curl, low fade, thin lines.
- **Big sweeps** — low field scale, higher speed.
- **Ink wash** — Mono palette, high fade, heavy line weight.
