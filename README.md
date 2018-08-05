# Learning about Fractal.build pattern library

Learning about [Fractal.build](https://fractal.build/) pattern library. Inspired by https://www.smashingmagazine.com/2018/07/pattern-library-first-css/

This demo project is available at https://fractal-learning.dutchwebworks.nl/

*By Dennis Burger, august 2018*

## Prerequisites

Make sure the following is installed on your machine:

* [NodeJS](https://nodejs.org)
* [Gulp](https://gulpjs.com), by running: `npm install -g gulp-cli`

## One time install

After you have this repository (or download) on you local machine. Open a **Terminal** (or command-line) and `cd` into the directory where this projects `package.json` resides. Then run the normal **NPM install** command inside this directory.

```bash
npm install
```

## Development

Below is the command to start a local development server on http://localhost:3000. This starts a **Gulp watcher** for `*.hbs` (handle bar templates), `*.scss` for Sass to CSS and a JavaScript watcher.

```bash
npm run dev
```

## Build for production

The settings for this Fractal build example project are different than it's defaults. I've setup this project to be hosted on Githug Pages which requires to have it *build* into the `docs/` directory instead of the Fractal default `build/` directory. I've also changed the Fractal `docs/` directory to be named `documentation/`.

The build command below will build al static version (ready for Github Pages) of this project to the `docs/` directory.

```bash
npm run build
```

This `docs/` directory is available on https://fractal-learning.dutchwebworks.nl.

## More example uses of Fractal.build pattern library

* [patterns.perchcms.com](http://patterns.perchcms.com/), the pattern library for the [Perch CMS](https://grabaperch.com/)
* [24ways.org](https://24ways.org/): their patter library called [bits.24ways.org](http://bits.24ways.org/), here's their [Fractal source code on Github](https://github.com/24ways/frontend)
* [Smasching Fractal](https://github.com/rachelandrew/smashing-fractal), demo site by Rachel Andrew from the article in above intro