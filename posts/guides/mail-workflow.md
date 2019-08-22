---
title: Mail Workflow
date: 2019-08-08
tags: guide
layout: layouts/essay.njk
slug: mail-workflow
permalink: /guides/{{ slug }}/index.html
---

Since I'm trying to write more articles and post updates regularly to my personal site I set out to create a writing workflow.

* Distraction free, so no bells and whistles. Navigation and most UI elements should be out of my away.
* Markdown Preview to see the text with formatting. To get a feel of how big sections are (flow of the article) and if all the links are displayed.
* Support syntax highlighting for the metadata (in `yaml`) format on the top of each file.
* Commit markdown files to a repository after I'm done writing.

![Writing Editor](/../posts/guides/img/writing-editor.png)

## Testing

Last week I tested 12+ writing apps and explored what features I liked. Here are some takeaways:

* Love the minimal interface of [Left](left). The shortcuts of Left are subliminal (inserting time stamps for example).
* Left and [iA Writer](iawriter) both have word and characters counters at the bottom bar those are handy for technical writing. Especially the reading time calculation.
* Quick inserts of markdown snippets in iA Writer. Footnotes, tables etc.
* iA writer has custom templates to jump start a post. That could be very useful for starter files for each type of post on this website.
* BBEdit, Scrivener, Texpad all felt a bit 'clunky' on start-up and overcomplicated for my personal needs.
* Standard Notes have plug and play extensions. You can install plugin and components if you need them.
* The Type Writer (focus mode) in Typora which let's you focus on specific paragraphs and makes other words transparent.

After all that testing it struck me, VS Code has lots of these features already built-in. Can I just use VS Code as my default writing app?

## Editor

VS Code has a [zen mode](zen-mode) to get rid of most of the UI. That is a quick win to make it feel more like a writing app. With the introduction of [workspaces](workspaces) you can configure settings for specific folders. It's easy to change color themes based on the folders you are in. So I have workspace that puts me in my `posts` folder of the website. It then changes my color theme to [`White Night`](white) and sets the writing font to [Duospace](duospace). I'll use `cmd + b` to toggle the sidebar to navigate files and use `ctrl + backtick` to open the [integrated terminal](terminal) to commit markdown files.

### Extensions
* [`Code Spell Checker`](spell-checker)
* [`Markdown All In One`](all-in-one)
* [`Alexjs`](alex)

## Becoming a better writer

[Writing for designers by Scott Kubie](writing-fordesigners) is a great starter. For better technical writing the [Shoptalk Show Episode with Rachel Andrew](shoptalk) is a good listen.

## Kind of writing
* **Notes and links:** usually quick thoughts and resources that can be valuable.
* **Guides and Workflows:** lengthy posts for future reference. Usually lists lots of resources and have a more step-by-step flow.
* **Tutorials:** beginner friendly content about tools, software or a technical topic.
* **Case Studies:** things I discovered working on a DIY project or side project that can be beneficial to more people.

## Style Guide

*I'm still working on this part. The idea is to have some general quality guidelines.* Currently looking at [Smashing Magazine Style Guide](smashing), [Shopify Voice and Tone](shopify), and [MailChimp Voice and Tone](mailchimp).

## Editorial process

Every time a new idea of an article pops up in my head. I'll add it to my writing [Notion Board](notion) with initial thoughts and the resources where I got the idea from. Usually I'll also add a status and publishing date. I regularly run the text trough [Grammarly](grammarly) and the [Hemmingway Editor](hemmingway). After writing the post I do some final checks based on this [smashing article template](article-template) and create the assets for social sharing.

1. Initial idea with resources
2. Outline of the post
3. First draft
4. Revisions (or a review)
5. Creating assets (banners, quotes etc.)
6. Publish on personal website
7. Share on social channels
8. Comment and engage

---
### Resources
* [Blogging Workflow by Ali Spittel](https://dev.to/aspittel/my-blog-post-workflow-from-topic-to-publication-4n78)
* [My Blogging Editing Process by Lindsey Kopacz](https://dev.to/aspittel/my-blog-post-workflow-from-topic-to-publication-4n78)
* [Writing Mode in VS Code by Diéssica Gurskas](https://diessi.ca/blog/writing-mode-in-vs-code/)
* [Ladybug podcast - Blogging 101](https://dev.to/aspittel/my-blog-post-workflow-from-topic-to-publication-4n78)
* [Syntax - Blogging](https://syntax.fm/show/168/blogging)
* [What is UX writing with Owen Williams](https://www.youtube.com/watch?v=5pafejjHU_Y)
* [How to write for use on Smashing Magazine](https://www.smashingmagazine.com/write-for-us/)

[zen-mode]: https://code.visualstudio.com/docs/getstarted/tips-and-tricks
[workspaces]: https://code.visualstudio.com/docs/getstarted/settings
[white]: https://marketplace.visualstudio.com/items?itemName=arthurwhite.White
[duospace]: https://ia.net/topics/in-search-of-the-perfect-writing-font
[terminal]: https://code.visualstudio.com/docs/editor/integrated-terminal
[spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[all-in-one]: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
[alex]: https://alexjs.com/
[hemmingway]: http://www.hemingwayapp.com/
[grammarly]: https://www.grammarly.com/
[shoptalk]: https://shoptalkshow.com/episodes/371/
[writing-for-designers]: https://abookapart.com/products/writing-for-designers
[notion]: https://css-tricks.com/how-ive-been-using-notion-personally-and-professionally/#article-header-id-2
[article-template]: https://gist.github.com/rachelandrew/8b4c6b0b223260a2eb966e5ab0a7f7ad
[smashing]: https://www.smashingmagazine.com/style-guide/
[mailchimp]: https://styleguide.mailchimp.com/voice-and-tone/
[shopify]: https://polaris.shopify.com/content/voice-and-tone
[iawriter]: https://ia.net/writer
[left]: https://100r.co/pages/left.html
