# GO13 — standalone GitHub package

This ZIP is self-contained. Upload all files to the root of a GitHub Pages repository.

## Files
- `index.html` — app shell
- `styles.css` — solid + special visual system
- `app.js` — navigation, day tabs, booking/site tabs, map/Waze actions, address copy, special view
- `app-data-GO13.js` — current GO13 trip data
- `manifest.json` + icons — iPhone / PWA support

## Important UX changes
- Daily page title is only the task/day title. Maps and Waze are action buttons inside each task.
- "הוזמן" and "מדריך אתרים" are placed at the end of the normal content.
- The special visual view is at the absolute end of the page and collapsed by default.
- Booking links and information-site links are kept in their own end tabs.

## Publish
1. Replace the repository files with everything in this folder.
2. GitHub → Settings → Pages → Deploy from branch → `main` / root.
3. Open the generated Pages URL.
