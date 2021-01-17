const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const readingTime = require('eleventy-plugin-reading-time');
const { DateTime } = require("luxon");
const randomLink = require('./_11ty/randomLink.js');
const markdownItAnchor = require("markdown-it-anchor");
const markdownIt = require('markdown-it');


module.exports = function(config) {
  config.addPassthroughCopy("static/img");
  config.addPassthroughCopy("static/fonts");
  config.addPassthroughCopy("static/js");
  config.addPassthroughCopy("css/style.css");
  config.addPassthroughCopy("static/other");
  config.addPassthroughCopy("posts/talks/transcripts/");

  config.addPlugin(pluginRss);
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(readingTime);

  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  config.addFilter("dayDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toLocaleString(DateTime.DATE_HUGE);
  });


  config.addFilter("dotDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd.LL.yy");
  });

  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  config.addFilter('randomLink', randomLink);

  config.addFilter('year', function(date) {
    const dateObj = new Date(date)
    return dateObj.getFullYear()
  })

  config.addFilter('limit', (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  config.addFilter('markdownFilter', (value) => {
    return markdownOptions.render(value);
  });

  config.addCollection("tagList", require("./_11ty/getTagList"));

  config.addFilter("size", (posts) => {
		return posts.length;
  });

  config.addShortcode("figure", function(url, caption) {
    return `<figure><a href="${url}"><img src="${url}" alt="${caption}"></a><figcaption class="after">${caption}</figcaption></figure>`
  });

  config.addShortcode('readingTime', function(text){
    // get entire post content element
    let wordCount = `${text}`.match(/\b[-?(\w+)?]+\b/gi).length;
    //calculate time in munites based on average reading time
    let timeInMinutes = (wordCount / 225)
    //validation as we don't want it to show 0 if time is under 30 seconds
    let output;
    if(timeInMinutes <= 0.5) {
      output = 1;
    } else {
      //round to nearest minute
      output = Math.round(timeInMinutes);
    }

    return `${output}`;
  });


config.addShortcode('wordCount', function(text){
    let wordCount = `${text}`.match(/\b[-?(\w+)?]+\b/gi).length;
    return `${wordCount}`;
  });


  config.addShortcode("figurePath", function(url, caption) {
    return `<li><figcaption class="before">${caption}</figcaption><a href="${url}"><img src="${url}" alt="${caption}"></a></li>`
  });

  config.addShortcode("notification", function(icon,title, description) {
    return `<div class="notification"><h6><span>${icon}</span>${title}</h6><p>${description}</p></div>`
  });

  let markdownOptions = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "¶",
  });

  config.setLibrary("md", markdownOptions);

  return {
    passthroughFileCopy: true,
    dir: {
      includes: "_includes",
      data: "_data",
      output: "_site"
  }
  }
}
