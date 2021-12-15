# Webpack demo

The project demonstrates a very simple usage of a module buncler such as webpack. This can be useful for many things such as
- use Javascript modules even in old browsers
- group multiple modules in one file so the browser has less requests to make.
- importing external dependencies into our code (e.g. [`lodash`](https://lodash.com/)). 
- doing some processing ou the final bundle to optimize it for production (e.g, minify the code) 
- and more...


In our webpack configuration, we are using the following loaders to process our code
- babel-loader – it will process `.js` files with babel and @babel/preset-env.
- css-loader – To resolve references to other modules using `url()` or `@import`
- style-loader - so when a CSS is imported in our JS, a `<style>` tag should be injected the HTML `<head>` with the stringified CSS
- asset/resource - this loader is included out of the box and allow us to import assets resources such as images in our JS code.


## Usage

1. Run `npm install` to install project dependencies
2. Run `npm run build` to let webpack compile the source code from `src` into the `dist` folder.
3. Run `npm run start` to serve the compiled project
