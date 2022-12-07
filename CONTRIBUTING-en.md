# Contributing

[En español](CONTRIBUTING.md)

First of all, thank you for considering contributing to My Organiser. It's people like you that make Mi Organizador such a great tool.

This guide will help you communicate respecting the time of the people who manage and develop this project. In return, you will receive the same respect, addressing your issue, and helping you to finalise your pull requests.

### Issues.

You can open an issue [here](https://github.com/44r0n/miorganizador/issues/new/choose). Issues will be the default channel to manage the project, report any bugs or ask any questions about the project. We will try to take care of the issue as soon as possible.

Before opening an issue, please make sure that there is no other issue already opened with the same request you are going to make.

The issues will be catalogued according to the predefined tags that come in Github. If you want, you can assign an issue to yourself by mentioning it in the issue thread. Contributions marked with the `help wanted` tag are especially welcome.


### What can you contribute?

Any help is welcome. As mentioned above, you can assign yourself an issue you want to work on by commenting on the issue itself. Or if you have found a bug or lack of documentation, you can [open an issue](https://github.com/44r0n/miorganizador/issues/new/choose) and comment that you are going to work on it.

### How can you contribute?

You can follow the following steps to get your repository set up so you can start working on your contribution.

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the project, clone it on your computer and set up your remote server:
```bash
# Clone your forked project into the current directory
$ git clone https://github.com/<your-user-name>/<repository-name>
# Enter the directory
$ cd <repository-name>
# Assign the original repository to the remote called "upstream"
$ git remote add upstream https://github.com/44r0n/miorganizador
```

2. If you cloned the repository a while ago, you should update it to get the latest changes:
```bash
$ git checkout main
$ git pull upstream main
```

3. Create a branch with the name of what you're going to work on, fix, new feature, documentation, etc:
```bash
git checkout -b <branch-name> $ ```bash
```

4. Be sure to update or add tests as needed. If your change needs documentation be sure to add it as well.

5. Publish your changes to your forked repository.
```bash
$ git push origin <branch-name>
```

[Open a pull request](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) with a clear title and description.

If during this process you have questions about the change you're going to make, open the pull request in draft mode and comment your question or the help you need.
