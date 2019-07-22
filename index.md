---
layout: layouts/default
---

# static-site-starter

Opinionated boilerplate that can be used to start a new static site project. It's built with static site generator [Eleventy (11ty)][11ty] and has a minimal asset pipeline using [PostCSS][postcss]. JavaScript all the way down.

## Features ✨

* Uses [`11ty`][11ty] as a static site generator which compiles [`nunjucks`][nunjucks] template
* Compiles SCSS [(`postcss`)][postcss], minifies [(`cssnano`)][cssnano] & prefixes [(`autoprefixer`)][cssnano]
* Linting with [`Stylelint`][stylelint] and browser scope [`browserslist`][browserslist]
* Minifies images using [`imagemin`](imagemin) and several [`plugins`][imagemin-plugins]
* Easily deployed to [`Netlify`][netlify]

## Components ⚙️
* [Overview](/components)

## Templates 📄
* [Blog - Overview](/blog)
* [Blog - Detail](/blog/first-post)

## License

[MIT][license] © [Danny de Vries][author]

Check out the [Github repo][github].

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
[github]: https://github.com/dandevri/static-site-starter
