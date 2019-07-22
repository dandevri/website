# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue or any other method with the owners of this repository before making a change.

> Please note we have a [code of conduct][coc], please follow it in all your interactions with the project.

## Pull Requests Process
1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Ensure your work is thoroughly tested, to the best of your abilities
3. You may merge the Pull Request in once you have the sign-off from a maintainer

## Roadmap

This project has a [roadmap][map].  All implemented features are ported over to either a [`defaults`][defaults] page or [`features`][features] subsection inside the Wiki. This project uses [SemVer][semver] [`releases`][releases] with small changelogs to keep track of which features are added.


## Naming Conventions

### Branches

This project uses "grouping" tokens in front of  branch names.

* `feat`: Adding or expanding a feature
* `fix`: Bug fix or critical hotfix
* `comp`: Adding components or updating layout

#### Examples

```
   `feat/offline-support`
   `fix/rss-feed`
   `comp/button`
   `comp/column-grid`
```

### Commits

This projects follow [The Seven Rules of writing a commit message][rules] by [Chris Beams][chris].

```
  1. Separate subject from body with a blank line
  2. Limit the subject line to 50 characters
  3. Capitalize the subject line
  4. Do not end the subject line with a period
  5. Use the imperative mood in the subject line
  6. Wrap the body at 72 characters
  7. Use the body to explain what and why vs. how
```

#### Examples

```
   `Update header meta tags`
   `Add RSS feed partial`
   `Fix 11ty config file`
```


[coc]: /code_of_conduct.md
[rules]: https://chris.beams.io/posts/git-commit/#seven-rules
[chris]: https://chris.beams.io/
[map]: https://github.com/dandevri/static-site-starter/wiki/roadmap
[defaults]: https://github.com/dandevri/static-site-starter/wiki/defaults
[features]: https://github.com/dandevri/static-site-starter/wiki/features
[releases]: https://github.com/dandevri/static-site-starter/releases
[semver]: https://semver.org/
