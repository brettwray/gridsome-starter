# Starter Project For Gridsome.

Made to save time getting a Gridsome project fired up. It's got my personal preferences, not really meant for the masses, but feel free to use it or make suggestions.

## Technologies Used:

[Gridsome](https://gridsome.org/)
[Netlify CMS](https://www.netlifycms.org/)
[SASS/SCSS](https://sass-lang.com/)
[POSTCSS](https://www.postcss.parts/)
[Buefy - Bulma for Vue](https://buefy.org/)
[Gridsome Plugin Netlify CMS](https://gridsome.org/plugins/gridsome-plugin-netlify-cms)
[Gridsome Transformer Remark](https://gridsome.org/plugins/@gridsome/transformer-remark)
[Gridsome Source Filesystem](https://gridsome.org/plugins/@gridsome/source-filesystem)
[Gridsome Sitemap](https://gridsome.org/plugins/@gridsome/plugin-sitemap)
[Gridsome Critical CSS](https://gridsome.org/plugins/@gridsome/plugin-critical)

**There's probably a few items missing from that list ^**

## Usage Instructions:

To use this starter, follow these steps:

1. Clone the repo.
2. cd into folder.
3. npm install.
4. Replace default values that are outlined below.
5. [Setup Github Auth](https://gridsome.org/docs/guide-netlify-cms/#netlify-cms-authentication-with-github)
6. npm run dev.
7. Happy Coding 😃

### Configuration Options / Files:

** gridsome.config.js **

-   siteName:

    -   The sitename that you want to use for this project.

-   siteUrl:

    -   The site URL

-   siteDescription:

    -   Default meta description.

** Plugins **

-   Gridsome Plugin Netlify CMS:

    -   publicPath: URL for your Netlify CMS login page

-   Gridsome Source Filesystem:

    -   path: The path to the folder that contains the markdown files for that content type.
    -   typeName: The name of your content type.
    -   remark: The remark plugins you want to use for that specific content type.

-   transformers.remark:

    -   Global remark plugins that you want to use.

-   Gridsome Critical CSS:

    -   options.paths: Array of paths to create critical css for.
    -   options.width: Width of viewport to use for determining what's above the fold.
    -   options.height: Height of viewport to use for determining what's above the fold.

** src/admin/config.yml **

This is where all of your netlify CMS config lives. Register your content types / collections here.

-   Backend:

    -   name: the backend type / name
    -   repo: the git repo

-   media_folder: /static/uploads where your media is stored
-   public_folder: /uploads where public files are stored

-   Collections:
    -   This is where you register your collections / content types. Follow the example provided in the file.

### Troubleshooting

The best place to find information is going to be on the [Gridsome Website](https://gridsome.org/). Information for the various plugins can be found there.
