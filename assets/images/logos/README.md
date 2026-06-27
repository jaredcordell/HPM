# Happy Path Marketing — Logo Files

## Files
| File | Use |
|------|-----|
| `hpm-horizontal-light.svg` | Primary lockup, light backgrounds |
| `hpm-horizontal-reversed.svg` | Primary lockup, navy/dark backgrounds |
| `hpm-stacked-light.svg` | Vertical lockup, light backgrounds (square-ish spaces) |
| `hpm-stacked-reversed.svg` | Vertical lockup, navy/dark backgrounds |
| `hpm-icon.svg` | Icon-only block (app icon, avatar, watermark) |
| `hpm-favicon-64.svg` / `-32.svg` | Browser tabs, ≥24px |
| `hpm-favicon-16.svg` | Tiny sizes — drops to "HP" |

## Colors
- Navy (primary): `#0B2545`
- White type: `#FFFFFF`
- Steel blue ("MARKETING", light bg): `#247BA0`
- Green (reversed accent + outline): `#69B578`

## Type
Set in Helvetica Neue / Arial. To upgrade, swap the `font-family` for Inter, Söhne, or Neue Haas Grotesk. "HPM" and "Happy Path" are weight 700; "MARKETING" is weight 400, tracked wide.

## Rules
- Clear space = height of the "H" in HPM on all four sides.
- Minimum horizontal width ~120px. Below 24px use the icon; at 16px use the HP favicon.
- Block aspect ratio 6:5 — do not stretch.
- Do not recolor the block, add effects, or place the light version on busy/dark imagery.

## Notes
- Text is live `<text>` (editable, tiny file size). For a developer-free handoff where exact font rendering matters, convert text to outlines/paths in Illustrator or via `inkscape --export-text-to-path`.
- Need PNG/ICO? Export the SVGs at 2x–4x, or generate a multi-resolution `.ico` from the favicon files.
