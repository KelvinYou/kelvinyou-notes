# Eslint Installation

## Eslint Installation

1. 安装eslint

    ```bash
    npm install --save-dev eslint
    ```

1. typescript支持

    ```bash
    npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
    ```

1. react支持

    ```bash
    npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
    ```

1. prettier冲突解决


    ```bash
    npm install --save-dev eslint-config-prettier
    ```

1. package.json添加script命令

    ```json
    "scripts": {
      "lint": "eslint --ext .ts,.tsx ./src"
    }
    ```



1. 配置`.eslintrc`文件

    ```ts
    module.exports = {
      root: true,
      env: {
        browser: true,
        es6: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // 自定义缩进约束为2格
        '@typescript-eslint/indent': ['error', 2],
        // 末尾無分號添加
        semi: ['error', 'always', { omitLastInOneLineBlock: true }],
        'semi-spacing': ['error', { before: false, after: false }],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: true,
            },
          },
        ],
        'react/display-name': 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      },
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'eslint-config-tencent',
        'eslint-config-tencent/ts',
        'prettier',
      ],
      // 修复react报错
      settings: {
        react: {
          version: 'detect',
        },
      },
    };

    ```



## git hooks 安装

1. 安装husky

    ```bash
    npm install --save-dev husky
    npm set-script postinstall "npx husky install"
    npx husky install

    ```



1. 安装  lint-staged

    ```bash
    npm install --save-dev lint-staged
    ```


1. package.json 文件添加相关命令

    ```json
    "scripts": {
        "eslint-stage": "npx eslint",
    },
    ```

    ```json
    "lint-staged": {
      "*.{js,jsx,ts,tsx}": [
        "npm run eslint-stage"
      ]
    },

    ```


1. 在husky目录添加hook文件pre-commit


    ```bash
    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"

    npx lint-staged
    ```

## 注意事项

1. `ESLint v9.0.0` 版本以上配置文件调整成`eslint.config.js`文件，.`eslintrc.js`已被弃用，该文档只适用于eslint v9版本以下

2. 同样`@typescript-eslint` 也需安装适配eslint v9以下的版本，即v5版本






