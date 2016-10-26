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
