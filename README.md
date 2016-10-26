# Supermind ESLint Config

Install [yarn](https://yarnpkg.com/) globally:

```bash
npm install yarn --global
```

Add `eslint-config-supermind` as a `devDependency` to your project:

```bash
yarn add eslint-config-supermind --dev
```

Create an `.eslintrc.js` file at the root of your project:

```js
module.exports = {
  root: true, // Prevent ESLint from resolving rules from configuration above this file
  extends: 'supermind' // Extend Supermind's ESLint configuration settings and rules
}
```

## Development

To lint the files within the repository run:

```bash
yarn run lint
```

To ensure that all available rules are specified throughout the config files run:

```bash
yarn run find-unused-rules
```

**NOTE:** Some rules have been [deprecated](deprecated.js) and should not be added to the config files.
