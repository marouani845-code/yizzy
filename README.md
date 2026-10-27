# YIZZY BEATS

A responsive, static beat-store website for GitHub Pages.

## Included
- Responsive dark producer-style design
- Five beat cards with audio player controls
- Licence enquiry dialog that opens an email draft
- Contact links for email, Instagram, and phone
- No API keys or secrets needed for the static site

## 1. Add your five beat previews
Create a folder named `songs` beside `index.html`, then add your own MP3 preview files named:
- `beat1.mp3`
- `beat2.mp3`
- `beat3.mp3`
- `beat4.mp3`
- `beat5.mp3`

Use audio you own or are allowed to distribute. If you don't have previews ready, the rest of the site still loads, but the audio players won't play.

## 2. Publish on GitHub Pages
1. Sign in to GitHub and create a repository named `yizzy-beats`.
2. Set it to **Public** if you want GitHub Pages on the free plan.
3. Upload `index.html`, `style.css`, `app.js`, and `README.md` to the repository root. Upload the `songs` folder when ready.
4. Open **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then save.
7. Wait for the Pages deployment to finish. The site URL will be shown in Settings → Pages and usually follows `https://YOUR-USERNAME.github.io/yizzy-beats/`.

## 3. Payments — important
This starter does **not** process payments. The licence button creates an email enquiry only. To accept money, configure a supported merchant checkout with your own account and verify orders server-side. Never put a PayPal client secret, password, or other private key in `app.js`, `index.html`, or any public repository. Wero availability and integration depend on your eligible merchant/payment provider. Keep payment buttons disabled until the real checkout has been tested.

## 4. Edit beat names and prices
Edit the `beats` array in `app.js`. The current names and prices are sample placeholders; replace them with your real titles, prices, and licence terms.

## 5. Contact details
The contact links are configured for:
- Yizzybeats1@gmail.com
- Instagram: @yizzy.beats
- +33 6 12 94 77 24

Review these details before publishing publicly.
