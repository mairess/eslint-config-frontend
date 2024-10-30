# ESLint Frontend Configuration

Custom ESLint configuration for frontend projects. Trybe Based package but with no max-len rule so we can tailwind without issues.

## Install

```shell
npm i @maires/eslint-config-frontend
```

## Usage - Javascript Project

Add the following on `.eslintrc.json`:

```javascript
{
  "extends": "@maires/eslint-config-frontend"
}
```

## Usage - Typescript Project

Add the following on `.eslintrc.json`:

```typescript
{
  "extends": "@maires/eslint-config-frontend/typescript"
}
```

## License

This project is licensed under the GNU General Public License (GPL-3.0). You are free to use, modify, and distribute this software as long as you do so under the same license.

### Source Code

The source code for this package is available at [npm link](https://www.npmjs.com/package/@trybe/eslint-config-frontend).

## Issues

Feel free to open an issue :)
