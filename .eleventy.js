const pluginRss = require("@11ty/eleventy-plugin-rss");
const readingTime = require('eleventy-plugin-reading-time');
const { DateTime } = require("luxon");

module.exports = function(config) {
  config.addPassthroughCopy("static/img");
  config.addPassthroughCopy("static/js");
  config.addPassthroughCopy("css/style.css");

  config.addPlugin(pluginRss);
  config.addPlugin(readingTime);

  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });


  return {
    passthroughFileCopy: true,
    dir: {
      includes: "_includes",
      data: "_data",
      output: "_site"
  }
  }
}
