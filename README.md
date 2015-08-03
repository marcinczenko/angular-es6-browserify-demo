# angular-es6-browserify-demo

> This is work in progress project. More documentation will be added soon.

This is a light startup project for angular, ES6, and browserify.

## Installing

In order to install run

    npm install

## Building

Before we can serve we need `browserify` to create a bundle for us. This is why we have a build step: `gulp build`. It will create a `dist` folder where it puts two files: `index.js` and `index.js.map`. As you see this is a debug version. We use [exorcist] to separate the source map files from the actual javascript bundle.

You can use `gulp watch` to have your javascript being continuously observed and rebuilt each time a change happens.

## Running

Just for the sake of experimenting I am using [koa] as the server.

To begin serving, just run:

    npm start


[exorcist]: https://www.npmjs.com/package/exorcist
[koa]: http://koajs.com
