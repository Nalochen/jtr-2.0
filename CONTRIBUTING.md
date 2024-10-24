# Contributing

## Contents

* [Before you start](#before-you-start)
* [Choose an issue to work on](#Choose-an-issue-to-work-on)
* [Set up development environment](#set-up-development-environment)
* [Issues and pull requests](#issues-and-pull-requests)
* [Contributor Licensing Agreement](#contributor-licensing-agreement)
* [Testing](#testing)
* [Style and Lint](#style-and-lint)
* [Development Cycle](#development-cycle)
  * [Branches](#branches)
  * [Release cycle](#release-cycle)


## Before you start

If you are new to JTR contributing we recommend you do the following before diving into the code:

* Read the [Code of Conduct](CODE_OF_CONDUCT.md)
* Familiarize yourself with the JTR community (via [Discord](https://discord.gg/SEWsr4KVvZ), [GitHub](TODO) etc.)


## Choose an issue to work on

JTR uses the following labels to help non-maintainers find issues best suited to their interests and experience level:

* [good first issue]() - these issues are typically the simplest available to work on, ideal for newcomers. They should already be fully scoped, with a clear approach outlined in the descriptions.
* [help wanted]() - these issues are generally more complex than good first issues. They typically cover work that core maintainers don't currently have capacity to implement and may require more investigation/discussion. These are a great option for experienced contributors looking for something a bit more challenging.
* [short project]() - these issues are bigger pieces of work that require greater time commitment. Good options for hackathons, internship projects etc.


## Set up development environment

To set up the development environment, you need to have Docker installed on your machine. 
Docker allows you to containerize your application, ensuring consistency across different development environments. 
Once Docker is installed, navigate to the root directory of your project and run `docker-compose up -d` to start the necessary services. 

After the services are up and running, you can build the project for different platforms using Nx.
For initial setup, run `npm install` to install the necessary dependencies.
To serving the project, run `nx serve desktop` for desktop, and for a mobile, run `nx serve mobile`. 
This will compile the respective versions of your application, making them ready for development and testing.

If you have to execute commands inside the Docker container, you can use the following command to connect to the container:

```sh
docker exec -it jtr /bin/sh
```


## Issues and pull requests

We use [GitHub pull requests](https://help.github.com/articles/about-pull-requests) to accept
contributions.

While not required, opening a new issue about the bug you're fixing or the
feature you're working on before you open a pull request is an important step
in starting a discussion with the community about your work. The issue gives us
a place to talk about the idea and how we can work together to implement it in
the code. It also lets the community know what you're working on, and if you
need help, you can reference the issue when discussing it with other community
and team members.

When you open a pull request, please make sure that it references the issue
you're working on. If the pull request fixes the issue, you can use the
`Fixes: #123` syntax to automatically close the issue when the pull request is
merged.

The pull request template will guide you through the process of opening a pull
request. Please fill out the template to the best of your ability.

All pull requests must pass the continuous integration checks before they can be
merged. If the checks fail, please review the logs and fix the issues before
requesting a review from the maintainers.

If you've written some code but need help finishing it, want to get initial
feedback on it prior to finishing it, or want to share it and discuss prior
to finishing the implementation, you can open a *Draft* pull request and prepend
the title with the **\[WIP\]** tag (for Work In Progress). This will indicate
to reviewers that the code in the PR isn't in its final state and will change.
It also means that we will not merge the commit until it is finished. You or a
reviewer can remove the [WIP] tag when the code is ready to be fully reviewed for merging.

After the code is ready to be reviewed and all checks passed successfully, 
the maintainers will review your work and provide feedback. If the pull request is approved, 
it will be merged into the main branch.


## Contributor Licensing Agreement

### Code Review

Code review is done in the open and is open to anyone. While only maintainers have
access to merge commits, community feedback on pull requests is extremely valuable.
It is also a good mechanism to learn about the code base.

Response times may vary for your PR, it is not unusual to wait a few weeks for a maintainer
to review your work, due to other internal commitments. If you have been waiting over a week
for a review on your PR feel free to tag the relevant maintainer in a comment to politely remind
them to review your work.

Please be patient! Maintainers have a number of other priorities to focus on and so it may take
some time for your work to get reviewed and merged. PRs that are in a good shape are easier for
maintainers to review and more likely to get merged in a timely manner. Please also make
sure to always be kind and respectful in your interactions with maintainers and other contributors,
you can read [the JTR Code of Conduct](CODE_OF_CONDUCT.md).


## Testing

### Backend

We use Pytest for backend testing. To run the tests, use the following command:

```sh
docker exec backend pytest
```

### Frontend

We use Jest for frontend testing. To run the tests, use the following command:

```sh
nx run-many --target=test --all
```


## Style and Lint

### Backend

We use autopep8 for code formatting and pylint for backend linting. To format the code, use the following command:

```sh
docker exec backend find . -name '*.py' -exec autopep8 --in-place --aggressive --aggressive {} \;
```

### Frontend

We use Prettier for code formatting and ESLint for frontend linting. To format the code, use the following command:

```sh
nx run-many --target=lint --all --fix
```


## Development Cycle

The development cycle for jtr is all handled in the open using
the project boards in Github for project management. We use milestones
in Github to track work for specific releases. The features or other changes
that we want to include in a release will be tagged and discussed in Github.


### Branches

* `main`:

The main branch is used for development of the next version of jtr.
It will be updated frequently and should not be considered stable. The branch
can and will change as we introduce and refine new features.


### Release cycle
