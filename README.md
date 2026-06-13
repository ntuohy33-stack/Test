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
- **Presets** — one-click looks (Silky Ribbons, Ink Wash, Big Sweeps, Kaleido Bloom, Embers, Neon Web).
- **Sliders** — particle count, field scale, speed, curl, trail fade, line weight.
- **Symmetry** — Off / Mirror / Quad / Kaleido (6-fold mandala mode).
- **Effects** — **Glow** (additive neon blending), **Drift** (the field slowly breathes),
  **Depth** (3D parallax — particles have depth that scales their size/speed and sways with your cursor),
  and **🎤 Audio** (reacts to your microphone — play music and watch it pulse and burst on the beat).
- **🖼 Paint from an image** — pick a photo (or **drag-and-drop** one onto the canvas) and the particles
  repaint it using the real colors sampled from underneath them.
- **🖌 Paint mode** — start from a blank canvas and build the image yourself by dragging; particles only
  appear where you touch and fade away when they leave, so nothing is generated for you.
- **✍️ Write words** — type a word and it materializes as crisp particles that linger for a beat, then
  release into the flow field and dissolve into colored streaks.
- **Palettes** — six built-in color sets plus a **Custom** palette you edit with color pickers.
- **🎲 Surprise me** — randomizes every setting for happy accidents.
- **🔗 Share link** — encodes your exact settings (incl. glow/drift/custom colors) into the URL; opening it restores the look.
- **💾 Gallery** — save the current canvas as a thumbnail to your browser (persists across visits);
  click a thumbnail to reload that look, Shift-click to delete.
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
| `X` | cycle symmetry mode |
| `G` | surprise me (randomize) |

## Recipes to try

- **Silky ribbons** — high curl, low fade, thin lines.
- **Big sweeps** — low field scale, higher speed.
- **Ink wash** — Mono palette, high fade, heavy line weight.
