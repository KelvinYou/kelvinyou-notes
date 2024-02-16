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

### Multiple files

```js
module.exports = {
  entry: {
    app: 'src/app.js',
    vendor: 'src/vendor.js'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js'
  }
}
```

This creates app.js and vendor.js.

## Loaders








## References

- https://devhints.io/webpack