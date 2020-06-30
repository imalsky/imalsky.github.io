# Isaac Malsky's personal website

Built from a Gatsby.js V2 starter template based on Paradigm Shift by HTML5 UP

For an overview of the project structure refer to [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Local development

Make sure that you have the following installed:

- [npm](https://www.npmjs.com/get-npm)
- Gatsby (install by running `npm install --global gatsby-cli`)

Clone the repo:

```sh
git clone git@github.com:imalsky/imalsky.github.io.git
```

Run it:

```sh
cd imalsky.github.io
npm install
gatsby develop
```

Visit http://localhost:8000/ in a browser to see your site!

In the future, you can run the site locally just by running `gatsby develop`.

### Editing

Edit site content on `src/pages/index.js` and `config.js`. Images live in the `assets/images/images` folder.

### Deployment

The default branch of this repo is `source`. For more on that, see [this Gatsby documentation](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/#deploying-to-a-github-pages-subdomain-at-githubio). All changes should be merged into `source`.

Changes can then be deployed to https://imalsky.github.io/ by running:

 ```sh
 npm run deploy
 ```

This will update the `master` branch, which is what Github Pages is watching.
