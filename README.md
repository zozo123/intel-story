# Intel: Vision Without Execution (2000–2026) 🔵

A single-page, comic/infographic-style deep-dive into Intel's journey from
the dot-com peak to the A0 era. Part visual essay, part post-mortem.

> **Thesis:** Intel never lacked vision — it lacked execution.

Time and again Intel saw the future early, placed a bet, and then failed to
follow through. This page walks through the bets it whiffed on, the reckoning
that followed, and where the company stands in 2026.

## 🧩 What's here

A static, self-contained page. No build step, no framework — just HTML, CSS,
a sprinkle of JS, and one big infographic.

- `index.html` — the page
- `styles.css` — styling
- `script.js` — light interactivity
- `assets/intel-journey-infographic.png` — the featured 3×3 infographic

## 🗺️ How it's structured

- **Hero** — sets the scene and the thesis.
- **Thesis** — the core argument: vision was never the problem.
- **Featured infographic** — a 3×3 grid summarizing the full 2000–2026 arc.
- **Phase 1 — The Five Fumbles:** the bets Intel saw coming and still missed.
  - **Mobile** — XScale (sold off right before the smartphone boom).
  - **AI & GPU** — Larrabee, Nervana, Movidius, Habana.
  - **Software** — McAfee, Wind River.
  - **Wearables & IoT** — Basis, Recon, Edison.
  - **Manufacturing collapse** — the 10nm stall that broke the cadence.
- **Phase 2 — The Reckoning:** the cost of the misses, culminating in
  Lip-Bu Tan taking the helm in March 2025.
- **Phase 3 — The A0 Era (2026):** where Intel goes from here.

## 🚀 Run it locally

It's a static site, so either works:

```bash
# Option A — just open it
open index.html

# Option B — serve it (recommended, avoids file:// quirks)
python3 -m http.server
# then visit http://localhost:8000
```

## 🌐 Deployment

Deployed via **GitHub Pages**. A `.nojekyll` file is included so Pages serves
the files as-is without Jekyll processing.

## 🖼️ Credits

Infographic provided by the author.
