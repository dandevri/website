---
title: Using GitHub as a team
description: Using GitHub for the first time has a steep learning curve. To use GitHub with a team is a whole different ball game. Here are some best practices I’ve come to know during my team projects.
slug: github-as-a-team
date: 2017-06-26
tags: article
layout: layouts/default.njk
permalink: /articles/{{ slug }}/index.html
---

# {{ title }}

Using GitHub for the first time has a steep learning curve. To use GitHub with a team is a whole different ball game. Here are some best practices I’ve come to know during my team projects.

Throughout the various OSS projects that I contributed to one thing always takes up more time than I expect. **Setting a Git(Hub) standard **for working on a repository. (or* repo* as the cool kids say it) Below are some best practices that really helped me along the way.

![[https://twitter.com/thepracticaldev](https://twitter.com/thepracticaldev?lang=en)](https://cdn-images-1.medium.com/max/2000/1*wCLDaW9kJFbdOtsU1AolBg.jpeg)*[https://twitter.com/thepracticaldev](https://twitter.com/thepracticaldev?lang=en)*

### Project your branches.

The first thing that prevents headaches in the future is to protect the master branch and make a develop one right away. It disables **force pushing **and prevents branches from being **deleted**. A great way to protect you’re project and make sure that you don’t have to 🚑 hotfix anything if you use *continuous integration *for example.

<iframe src="https://medium.com/media/de7dfb3a6f64ad617de7a43f2caa45bc" frameborder=0></iframe>

### Consistent branch naming.

With the master branch protected contributors can’t push straight into master. They have to use branches and make pull requests. Coming up with a **naming convention **for the branches is very helpful. One of the things is to use **prefixes:**

* fix/...

* feature/...

* enhancement/...

* And so on…

In a quick overview you can see what each branch is for and they have consistent naming.

### Pull requests.

Make sure PR’s can’t be merged without a required review. If you protect a branch you can also enable Require pull request reviews before merging. Every PR that comes in has to be reviewed by another contributor.

So, merging is blocked by default. A contributor has to manually navigate to the PR and hit review changes. You then can either:

* Make **comments** for general feedback. (No explicit approval)

* **Approve **the changes and the PR can be merged

* **Request changes, **things that have to be fixed before merging.

A great way to get a quick quality check before the code get merged.

* It keeps the overall quality of the code on point.

* More eyes 👀 are better. Somebody else can spot a mistake you might have missed.

* And personally, I think it’s a good way to learn by looking at somebody else’s code.

### Commit messages.

Oh god, commit messages. Always a painful topic to talk about. Everyone has a personal / preferred way to do it. **Chris Beam** has written a great post about this in 2014. It are some general rules but most people find them acceptable.
> You should definitely read the [full post](https://chris.beams.io/posts/git-commit/).

Here are his seven golden rules:

1. [Separate subject from body with a blank line](https://chris.beams.io/posts/git-commit/#separate)

1. [Limit the subject line to 50 characters](https://chris.beams.io/posts/git-commit/#limit-50)

1. [Capitalize the subject line](https://chris.beams.io/posts/git-commit/#capitalize)

1. [Do not end the subject line with a period](https://chris.beams.io/posts/git-commit/#end)

1. [Use the imperative mood in the subject line](https://chris.beams.io/posts/git-commit/#imperative)

1. [Wrap the body at 72 characters](https://chris.beams.io/posts/git-commit/#wrap-72)

1. [Use the body to explain *what* and *why* vs. *how](https://chris.beams.io/posts/git-commit/#why-not-how)*

Ideally your commit title would look like this:

    Add styling for navigation bar

Usually these rules are outlined in the contributing.md and examples are given.

### Plan your commits.

Guilty as charge of commiting a large blob of code. But, planning your commits is also a good strategy to keep yourself in check. Before you go straight into building that feature try to break the feature down into small steps. Each step then represents a commit. [Here](https://dev.to/rpalo/plan-your-commits) is a quick little post on **dev.to **about this.

### Gitmoji.

Last but not least the holy grail of commit messages. **GITMOJI 🎉🦄🔥. **Made by[ Carlos Cuesta](https://carloscuesta.me) Gitmoji has to be one of my favorite CLI tools.
> [Gitmoji](https://gitmoji.carloscuesta.me/) is an initiative to standardize and explain the use of emojis on GitHub commit messages.

It’s great cause it forces you to categorize your commits and even better, in the history you can easily spot the core of each commit and recognize it by it’s emoji.

You can use Gitmoji from the command line by installing it globally.

    npm i -g gitmoji-cli

in the project you want to use Gitmoji type:

    gitmoji -i

![Gitmoji dialog in HyperTerm.](https://cdn-images-1.medium.com/max/2000/1*u04Qy98Dnc3hL2wwtNaAcg.png)*Gitmoji dialog in HyperTerm.*

From now on every git commit (or gc for the oh my zsh users out there) pops up the gitmoji dialog and before you can write you’re title you have to pick a gitmoji.
> Coming up with a consistent GitHub standard and flow may take some time but it’s worth it in the long run. It makes the repo far more maintainable and has saved me from these kind of situations:

<iframe src="https://medium.com/media/7cd45216b3a47b0e025d1c0862395220" frameborder=0></iframe>
