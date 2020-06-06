module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('postcss-normalize'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('cssnano'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './_site/**/*.html',
      ],
    }),
  ]
}
