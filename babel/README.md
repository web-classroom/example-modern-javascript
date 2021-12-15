# Babel example

The project demonstrates the usage of [babel](https://babeljs.io/) with [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env).

The `.browserslistrc` config file lists the browsers we want to support. Based on this configuration, @babel/preset-env will automatically activate the necessary plugins to transform our code and inject the necessary polyfills to implement missing features in targeted browsers.

## Usage

1. Run `npm install` to install project dependencies
2. Run `npm run build` to compile the source code from `src` into the `dist` folder.
