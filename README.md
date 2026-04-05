# Reality Check AI — Brutally Honest Life Advisor

A lightweight, no-build web app that gives direct, structured advice from a single question prompt.

## What it does

When a user enters a question, the app returns advice in four sections:

1. **Harsh Truth** — direct framing of the core issue.
2. **Logical Breakdown** — practical principles behind the situation.
3. **Risk Analysis** — likely downside scenarios.
4. **Action Plan** — a short execution checklist.

The response tone changes slightly when the question includes urgency keywords (for example: `quit`, `job`, `invest`, `debt`, `startup`, etc.).

## Project structure

- `index.html` — semantic structure and UI sections.
- `styles.css` — dark-themed responsive styling.
- `app.js` — question parsing, advice generation, rendering, and interactions.

## Run locally

No build tools or dependencies are required.

### Option 1: open directly

Open `index.html` in your browser.

### Option 2: serve over a local HTTP server

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Live URL

https://reality-check-ai-brutally-honest-life.onrender.com/

## Usage

1. Type a question in the input field.
2. Click **Get Reality-Free Brutal Advice** or press **Enter**.
3. Read the four output sections.

## Notes

- The advisor output is deterministic and template-based.
- It is intended for motivational clarity, not legal, medical, or financial advice.
- Empty input is ignored.
