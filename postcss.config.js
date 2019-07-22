module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('postcss-normalize'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-font-magician')({
      display: 'swap'
    }),
    require('autoprefixer'),
    require('cssnano'),
  ]
}
