const pluginRss = require("@11ty/eleventy-plugin-rss");
const readingTime = require('eleventy-plugin-reading-time');
const { DateTime } = require("luxon");
const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
});


module.exports = function(config) {
  config.addPassthroughCopy("static/img");
  config.addPassthroughCopy("static/fonts");
  config.addPassthroughCopy("static/js");
  config.addPassthroughCopy("css/style.css");
  config.addPassthroughCopy("static/other");

  config.addPlugin(pluginRss);
  config.addPlugin(readingTime);

  config.addShortcode("figure", function(url, caption) {
    return `<figure><img src="${url}" alt="${caption}"><figcaption>Caption of the image</figcaption></figure>`
  });

  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  config.addFilter("dotDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd.LL.yy");
  });

  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  config.addFilter('limit', (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  config.addFilter('markdownFilter', (value) => {
    return markdownIt.render(value);
  });

  config.addCollection("tagList", require("./_11ty/getTagList"));

  config.addFilter("size", (posts) => {
		return posts.length;
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
