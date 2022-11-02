# Mi Organizador

[En Español](README.md)

I have been trying to organise my life for some time now. Like everyone else. And it's not an easy task. I try to have my finances under control, to know the tasks I have pending, if I have a date with someone and someone tells me to meet them the same day I have to remember and tell them no, I have several communication channels between email, Telegram, Twitter...

There are applications that solve things separately, but I would like to have it all in one place. Maybe something already exists, but I'd like to try to make an app to my liking. So this app is the tool to organise my life.

I know it will be a hard road, I will take it with patience. If along the way I learn something or someone else can use this application, so much the better.

You can see more details [here]().

## Table of contents

1. [About My Organiser](#about-my-organiser)
1. [Project status](#project-status)
1. [Where to start](#where-to-start)
	1. [Dependencies](#dependencies)
1. [Release process](#release-process)
	1. [Versioning](#versioning)
1. [Getting help](#getting-help)
1. [Contributing](#contributing)
1. [Licensing](#licensing)
1. [Authors](#authors)

## About My Organiser

There are several aspects of my live I would like to control. As nothing is done at the moment, this list below is just a wish list.

- An always visible section with the current weather (dynamic wallpaper?). As well as a part with the weather forecast. This part seems a bit absurd, but it's useful to plan washing machines or meetings with friends.
- A section to control my finances. Lately I've been trying to keep it under control with a method called [Kakebo](https://www.google.com/search?hl=es&q=kakebo). I'm liking it a lot, but the way I have in mind to manage it needs some modifications.
- There are many communication channels in the world, and I often use several at the same time and have to jump from one to the other. I would like to have this centralised.
- If we can add calendar and task management to all this, it would be the ideal application for me.

Looking at the ~~needs~~ wishes I have for this application, it is clear that it handles sensitive information, so I don't want it to stay on some server. It will be a desktop application that will be able to work with or without an internet connection, removing the obvious parts like communication channels and so on. As the application may be used on several operating systems, it will be developed on [Electron](https://www.electronjs.org/)

**[Index](#index)**

## Project status

Right now it's all about to start.

**[Index](#index)**

## Where to start

As there is nothing at the moment, here I write what I would like to be the developer's experience.

Once the project is cloned, you should be able to install the dependencies:
```
$ npm i
```

You should be able to launch the application in development mode with one command:
```
$ npm start
```

Tests must be able to be launched continuously for development:
```
$ npm run test
```

And they should be differentiated from tests that are run in continuous integration:
```
$ npm run test-ci
```

You should be able to build an installable for each platform with one command:
```
$ npm run build
```

For each version of the application you should leave a package compiled in release mode in the releases section.

**[index](#index)**

### Dependencies

I don't know if there will be images in the project, if there are, they should be managed with `git-lfs`, it should be reported as a dependency.

The rest of the project dependencies should be installed with `npm i`.

**[Index](#index)**.

### Getting the code

This project is on [Github](https://github.com/44r0n/miorganizador). You can clone the project with the following command:
```
$ git clone git@github.com:44r0n/miorganizador.git
```

## Release process

To release a version a tag will be added to the `main` branch with the name of the version. It will be released when the corresponding features are added and the branch is stable. Installers of the application should be added to the release section of the repository.

### Versioning

The project uses [semantic versioning](http://semver.org/). To see the available versions visit [project tags](https://github.com/44r0n/miorganizador/tags).

## Getting help

If you need help feel free to open a question issue.

## Contributing

If you want to contribute to the project, please read [how to contribute](CONTRIBUTING-en.md).

**[Index](#index)**.

## License

This project is licensed under GNU v3. Check [LICENSE.md](LICENSE.md) for more details.

This project is licensed under the XXXXXX License - see [LICENSE.md](LICENSE.md) file for details.

**[Table of Contents](#index)**

## Authors

* **[Aarón Sánchez Navarro](https://github.com/44r0n)** - *Initial work* -

**[Index](#index)** - **[Index](#index)** - **[Index](#index)**
