# imalsky.github.io

Personal academic website for Isaac Malsky. A single static page — plain HTML/CSS, no
build step, no framework. Type is [Open Sans](https://fonts.google.com/specimen/Open+Sans)
and icons are [Font Awesome Free](https://fontawesome.com/) 5.15.4.

## Structure
```
index.html                 # the whole site (hero, research, publications, contact)
assets/css/style.css       # all styling
assets/css/fontawesome-*   # icon font (only solid + brands faces kept)
assets/webfonts/           # woff2/woff for the icon font
images/headshot.jpg        # cropped, web-sized headshot (800×800)
images/research/*.jpg      # figure thumbnails pulled from first-author papers
files/Isaac_Malsky_CV.pdf  # the CV linked from the nav and buttons
```
Local-only source files (`Headshot.jpg` original, `academic_cv.local.pdf`) are git-ignored;
the committed site uses the optimized copies under `images/` and `files/`.

## Preview locally
Run this from the project folder, then open http://localhost:8765
```
python3 -m http.server 8765
```

## Updating
- **Headshot:** replace `images/headshot.jpg` (a centered square crop displays as a circle).
- **CV:** replace `files/Isaac_Malsky_CV.pdf` (keep the filename).
- **Research highlights:** each is one `<article class="card">` in the `#research` section —
  an image in `images/research/`, an eyebrow (journal · year), a linked title, a blurb.
- **Publications:** edit the `#publications` section. Each entry is one `<li class="pub">`
  with a year, a linked title (DOI), and an author/venue line.

## Deploy to GitHub Pages
The repo is named `imalsky.github.io`, so GitHub Pages serves it automatically from `main`.
To publish changes:
```
git add -A
git commit -m "Update site"
git push
```
The live site updates at https://imalsky.github.io within a minute or two.
