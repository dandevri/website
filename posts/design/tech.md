---
date: 2020-09-20
title: Technology
description: The tech that runs this site and how it's build
tags: design
layout: layouts/default.njk
permalink: /changelog/tech/index.html
---

This site is a blog-based personal website and it's constantly evolving. I wanted it to be a digital garden; easy to experiment with and try out new things with web technology. Performance and accessibility were also important aspects in the creation of this website.

## Principles

My plan is to keep this site online for decades to come so I didn't want to rely on one specific technology that might be obsolete in a couple of years. If I ever wanted to move my content over I could easily port over the files and switch to other tooling.

I wanted to own my content and be in control of how my content is presented. In that sense the whole philosophy around this website is inspired by the IndieWeb concept.

* **Fast:** feels fast for visitors but also for me to work on it.
* **Content first:** don't want to deal with 'how something looks'.
* **Personality:** control over how my content is presented and give it a personal twist.
* **No trends:** there is always this desire to redesign because of trends. I don't want this site to follow trends.

I don't plan in selling or otherwise offer my website design. It's custom designed and developed myself with the help of technology other people created. 

This site is my hobby and digital playground to try out new web related things. This site is constantly evolving. I've spent many nights, weekends tinkering and redesigning this site.

It has no commercial agenda. It's bullshit free, just my content offered on a clean site.


## Hosting

This site is hosted on Netlify which means I don't have to worry about scaling. Netlify does all the heavy lifting of deploying, building and keeping the live site up to date. The code behind this website is hosted on a public (open source) GitHub in a separate GitHub organization. Updating an article or creating new pages is as easy as changing the markdown file and commit (and push) the file to GitHub. Netlify does the rest.

## Code

This site uses the static site generator (ssg) 11ty (thus powered by Hand Coding™). I just want to write markdown and have it generate all the necessary pages. I do not like dealing with a CMS or database of some sort. Besides the core 11ty ssg I reilly on a couple of additional plugins and packages to add functionality. Like RSS feeds, navigation highlights and sitemaps.

The most notable other tooling I use lies in CSS compiling which I use `PostCSS` for. Additionally  linters like `eslint`, `stylelint` and `editorconfig` help me enforce a consistent coding style.
