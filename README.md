![Static Site Starter](/docs/github-banner.jpg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/8101fd14-c131-4e52-969a-ccc0ffd038c4/deploy-status)](https://app.netlify.com/sites/suspicious-lamport-275cea/deploys)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dandevri/static-site-starter)

# static-site-starter

Opinionated boilerplate that can be used to start a new static site project. It's built with static site generator [Eleventy (11ty)][11ty] and has a minimal asset pipeline using [PostCSS][postcss]. JavaScript all the way down.

## Features ✨

* Uses [`11ty`][11ty] as a static site generator which compiles [`nunjucks`][nunjucks] templates
* Compiles SCSS [(`postcss`)][postcss], minifies [(`cssnano`)][cssnano] & prefixes [(`autoprefixer`)][cssnano]
* Linting with [`Stylelint`][stylelint] and browser scope [`browserslist`][browserslist]
* Minifies images using [`imagemin`](imagemin) and several [`plugins`][imagemin-plugins]
* Easily deployed to [`Netlify`][netlify]


## Install

Follow these steps to get started:

1. Clone the project

```
$ git clone https://github.com/dandevri/static-site-starter.git
```

2. Then do the
```
npm run dev
```

to start the live-reloadzz on a local development server.

## License

[MIT][license] © [Danny de Vries][author]

[11ty]: https://www.11ty.io/]
[postcss]: https://postcss.org/
[cssnano]: https://cssnano.co/
[nunjucks]: https://mozilla.github.io/nunjucks/
[autoprefixer]: https://github.com/postcss/autoprefixer
[stylelint]: https://stylelint.io/
[browserslist]: https://github.com/browserslist/browserslist
[netlify]: https://www.netlify.com/
[imagemin]: https://github.com/imagemin/imagemin
[imagemin-plugins]: https://web.dev/use-imagemin-to-compress-images#plugins
[author]: https://github.com/dandevri
[license]: license

[image]: https://images.guide/
