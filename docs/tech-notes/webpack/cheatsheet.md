# Webpack - Cheat Sheet

## Basic

### Basic config

`webpack.config.js` or `webpack.config.ts`
```js
module.exports = {
  context: __dirname,
  entry: 'src/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  }
}
```

terminal

```shell
npm install --save-dev webpack

webpack                     # build
webpack -- -p               # build production
webpack -- --watch          # compile continuously
```

This compiles `src/app.js` into `public/app.js`. (Note: you may need to use `./node_modules/.bin/webpack` as a command if you’re not invoking Webpack via npm scripts.)

### Multiple files

```js
module.exports = {
  // highlight-start
  entry: {
    app: 'src/app.js',
    vendor: 'src/vendor.js'
  // highlight-end
  },
  output: {
    path: __dirname + '/public',
    // highlight-next-line
    filename: '[name].js'
  }
}
```

This creates `app.js` and `vendor.js`.

## Loaders

### Babel

Terminal

```bash
npm install --save-dev \
  babel-loader \
  babel-preset-env \
  babel-preset-react
```

`webpack.config.js`

```js
module.exports = {
  ···
  // highlight-start
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
  // highlight-end
        ]
      }
    ]
  }
}
```

`.babelrc`

```js
{
  "presets": [ "env", "react" ]
}
```

Adds support for [Babel](https://babeljs.io).

### CSS

Terminal

```bash
npm install --save-dev \
  css-loader \
  style-loader
```

`webpack.config.js`

```js
module.exports = {
  ···
  // highlight-start
  module: {
    rules: [
     { test: /\.css$/,
       exclude: /node_modules/,
       use: [
         { loader: 'style-loader' },
         { loader: 'css-loader' }
  // highlight-end
       ]
      }
    ]
  }
}
```

Your JavaScript

```js
import './styles.css'
// or:
require('./styles.css')
```

This allows you to use CSS inside your JavaScript. This packages your CSS inside your JavaScript bundle.

## Other features

package.json

```js
{ ···
  "scripts": {
    "dev": "webpack-dev-server"
  }
}
```

Terminal

```bash
npm install --save-dev \
  webpack-dev-server

npm run dev
```

This starts an HTTP server for development (port 8080 by default).

## References

- https://devhints.io/webpack