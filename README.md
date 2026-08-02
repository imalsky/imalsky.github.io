# imalsky.github.io

Personal academic website for Isaac Malsky. A single static page — plain HTML/CSS, no
build step, no framework. Body type is [Open Sans](https://fonts.google.com/specimen/Open+Sans),
headings are [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4), and icons
are [Font Awesome Free](https://fontawesome.com/) 5.15.4.

## Structure
```
index.html                 # the whole site (hero, research, publications, footer)
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
  with a year, a linked title (DOI), and an author/venue line. Keep each group in
  reverse-chronological order.

## Keeping publications in sync
**The CV is the source of truth.** It is the most complete of the three records, ahead of both
this site and ORCID. The LaTeX source lives outside this repo at
`~/Documents/Jobs/academic_cv/academic_cv.tex`; `files/Isaac_Malsky_CV.pdf` is the compiled copy.

Whenever the CV gains a paper, add it here too. To check the site against the CV
(`pdftotext` comes from `brew install poppler`):
```
pdftotext -layout files/Isaac_Malsky_CV.pdf - | grep -i "some title keyword"
grep -i "some title keyword" index.html
```

Do not rely on ORCID as the checklist. It misses papers where the publisher never deposited
an ORCID iD with the DOI, which is common for middle-author papers and for A&A. As of August
2026 the record was short by four. Cross-check new work against three sources instead:

- arXiv: `https://export.arxiv.org/api/query?search_query=au:"Malsky"&sortBy=submittedDate&sortOrder=descending`
- Crossref: `https://api.crossref.org/works?query.author=Malsky&filter=from-pub-date:2026-01-01`
- ORCID: `https://pub.orcid.org/v3.0/0000-0003-0217-3880/works`

Before adding an entry, confirm the DOI and the author list, since a first author can change
between the preprint and the published version:
```
curl -sL -H "Accept: application/vnd.citationstyles.csl+json" https://doi.org/10.3847/1538-3881/ae0ca9
```

## Deploy to GitHub Pages
The repo is named `imalsky.github.io`, so GitHub Pages serves it automatically from `main`.
To publish changes:
```
git add -A
git commit -m "Update site"
git push
```
The live site updates at https://imalsky.github.io within a minute or two.
