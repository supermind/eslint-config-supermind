# Supermind ESLint Config

Install [yarn](https://yarnpkg.com/) globally:

```bash
npm install yarn --global
```

Add `eslint` and `eslint-config-supermind` as a `devDependency` to your project:

```bash
yarn add eslint eslint-config-supermind --dev
```

Create an `.eslintrc.js` file at the root of your project and add the following configuration:

```js
module.exports = {
  root: true, // Prevent ESLint from inheriting configuration above this file
  extends: [
    'supermind',          // Extend base configuration
    'supermind/flowtype', // Extend Flow configuration
    'supermind/react'     // Extend React configuration
  ]
}
```

Add a `lint` script in your project `package.json` file:

```json
{
  "name": "kitten-socks",
  "scripts": {
    "lint": "eslint source"
  }
}
```

To lint the `source` directory of your project run:

```bash
yarn run lint
```

## Development

To ensure that all available rules are specified throughout the config files run:

```bash
yarn run find-unused-rules
```

**NOTE:** Some rules have been [deprecated](deprecated.js) and should not be added to the config files.
