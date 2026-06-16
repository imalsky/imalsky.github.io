# imalsky.github.io

Personal academic website for Isaac Malsky. Static single-page site built on the
[Miniport](https://html5up.net/miniport) template by HTML5 UP (CCA 3.0 license — see
`README.txt` / `LICENSE.txt`). No build step; everything is plain HTML/CSS/JS.

## Preview locally
Run this from the project folder, then open http://localhost:8765
```
python3 -m http.server 8765
```

## Things to swap in
- **Photo:** save your headshot as `images/profile.jpg`, then change `images/profile.svg`
  to `images/profile.jpg` in `index.html` (the `#about` section). Until then a placeholder shows.
- **CV:** replace `Isaac_Malsky_CV.pdf` in the root with your real CV (keep the same filename).
- **Publications:** edit the `#publications` section of `index.html`. Each entry is one
  `<li class="pub">` block with a year, a linked title, and an author/venue line. The list
  was generated from your ORCID/ADS record (first-author papers + DOI links verified).

## Deploy to GitHub Pages
1. Create a new **public** repo on GitHub named exactly `imalsky.github.io` (leave it empty — no README).
2. From this folder, run each line:
```
git init -b main
git add -A
git commit -m "Initial academic website"
git remote add origin https://github.com/imalsky/imalsky.github.io.git
git push -u origin main
```
3. GitHub auto-enables Pages for `*.github.io` repos. The site goes live at
   https://imalsky.github.io within a minute or two.

To update later: edit files, then `git add -A`, `git commit -m "..."`, `git push`.
