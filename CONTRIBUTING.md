# Contributing to `questionnaireio`

We would love for you to contribute to `questionnaireio` and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:

- [Code of Conduct](#coc)
- [Question or Problem](#question)
- [Issues or Bugs](#issue)
- [Feature Requests](#feature)
- [Submission Guidelines](#submit)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)

## <a name="coc"></a> Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/StickNitro/questionnaireio/blob/master/CODE_OF_CONDUCT.md).

## <a name="question"></a> Got a Question or Problem?

Do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests. You've got a much better chances of getting your question answered on [StackOverflow](https://stackoverflow.com/questions/tagged/questionnaireio) where the questions should be tagged with tag `questionnaireio`, or you can join to our [slack][slack] channel.

Stack Overflow is a much better place to ask questions since:

- there are thousands of people willing to help on Stack Overflow
- questions and answers stay available for public viewing so your question / answer might help someone else
- Stack Overflow's voting system assures that the best answers are prominently visible.

To save your and our time, we will systematically close all issues that are requests for general support and redirect people to Stack Overflow.

If you would like to chat about the question in real-time, you can reach out via our [slack channel][slack].

## <a name="issue"></a> Found a Bug?

If you find a bug in the source code, you can help us by [submitting an issue][issue] to our [GitHub Repository](https://github.com/StickNitro/questionnaireio). Even better, you can [submit a Pull Request][pr] with a fix.

## <a name="feature"></a> Missing a Feature?

You can request a new feature by [submitting an issue](https://github.com/StickNitro/questionnaireio/issues/new?template=feature_request.md) to our GitHub Repository. If you would like to implement a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it. Please consider what kind of change it is:

- For a **Major Feature**, first open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.
- **Small Features** can be crafted and directly [submitted as a Pull Request][pr].

## <a name="submit"></a> Submission Guidelines

### Submitting an Issue

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs we will systematically ask you to provide a minimal reproduction scenario using [plunker][plunker] or [StackBlitz][stackblitz]. Having a live, reproducible scenario gives us wealth of important information without going back & forth to you with additional questions like:

- version of Angular used
- version on questionnaireio used
- build system: angular cli, system.js, starter seed used
- and most importantly - a use-case that fails

A minimal reproduce scenario using [plunker][plunker] or [StackBlitz][stackblitz] allows us to quickly confirm a bug (or point out coding problem) as well as confirm that we are fixing the right problem. If plunker/StackBlitz is not a suitable way to demonstrate the problem (for example, for issues related to our npm packaging), please create a standalone git repository demonstrating the problem.

We will be insisting on a minimal reproduce scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience users often find coding problems themselves while preparing a minimal plunk. We understand that sometimes it might be hard to extract essentials bits of code from a larger code-base but we really need to isolate the problem before we can fix it.

Unfortunately we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that don't have enough info to be reproduced.

You can file new issues by filling out our [new issue form][issue].

### Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

- Search [GitHub](https://github.com/StickNitro/questionnaireio/pulls) for an open or closed PR that relates to your submission. You don't want to duplicate effort.

- Make your changes in a new git branch:

  ```bash
  git checkout -b my-fix-branch development
  ```

- Create your patch, including appropriate test cases.

- Follow our [Coding Rules](#rules).

- Run `npm run test` and ensure that all tests pass.

- Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit). Adherence to these conventions is necessary because release notes are automatically generated from these messages.

  ```bash
  git commit -a
  ```

Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

- Push your branch to GitHub:

  ``` bash
  git push origin my-fix-branch
  ```

- In GitHub, send a pull request to `master` branch.

- If we suggest changes then:
  - Make the required updates.
  - Re-run `npm run test` to ensure tests are still passing.
  - Push to your GitHub repository (this will update your Pull Request):

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```bash
    git push origin --delete my-fix-branch
    ```

- Check out the development branch:

  ```bash
  git checkout development -f
  ```

- Delete the local branch:

  ```bash
  git branch -D my-fix-branch
  ```

- Update your development with the latest upstream version:

  ```bash
  git pull --ff upstream development
  ```

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes must be tested by one or more specs (unit-tests).
- All public API methods must be documented. (Details TBC).
- We follow [Google's JavaScript Style Guide][jsguide].

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more readable messages** that are easy to follow when looking through the **project history**. But also, we use the git commit messages to **generate the questionnaireio change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

Footer should contain a [closing reference to an issue](https://help.github.com/en/articles/closing-issues-using-keywords) if any.

Samples: (even more [samples](https://github.com/StickNitro/questionnaireio/commits/master))

```
docs(changelog): update change log to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Coveralls)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the npm package affected (as perceived by person reading changelog generated from commit messages.

The following is the list of supported scopes:

- 

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE: ` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#).

## Attribution

This `CONTRIBUTING.md` is adapted from the Angular's `CONTRIBUTING.md`, available at https://github.com/angular/angular/blob/master/CONTRIBUTING.md


[slack]: https://onitro.slack.com
[issue]: https://github.com/StickNitro/questionnaireio/issues/new?template=bug_report.md
[pr]: https://github.com/StickNitro/questionnaireio/compare
[plunker]: https://next.plnkr.co/edit
[stackblitz]: https://stackblitz.com
[jsguide]: https://google.github.io/styleguide/jsguide.html
