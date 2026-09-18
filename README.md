# Park Lab website

A plain static site for GitHub Pages. No build step and nothing to install.

## Where to change things

| To change...            | Edit this file            |
|-------------------------|---------------------------|
| Research themes         | `data/themes.js`          |
| Members and alumni      | `data/people.js`          |
| Publications            | `data/publications.js`    |
| News                    | `data/news.js`            |
| Home page wording       | `index.html`              |
| Colors and fonts        | top of `assets/style.css` |

Photos go in `images/people/` (file names are set in `data/people.js`). Your CV goes in
`files/park-cv.pdf`. If a photo is missing, the person's initials are shown instead.

## Publishing on GitHub Pages

1. Create a repository named `YOURNAME.github.io` (or any name, then turn on Pages in Settings).
2. Upload everything in this folder, keeping the folders as they are.
3. Settings > Pages > Deploy from a branch > `main` / root.
4. Your site appears at `https://YOURNAME.github.io` within a few minutes.
