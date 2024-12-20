/* eslint-disable no-magic-numbers */

require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['react', 'react-redux', 'react-hooks', 'sonarjs', 'react-func'],
  ignorePatterns: ['cypress/*'],
  overrides: [
    {
      files: [
        '*.spec.js',
        '*.spec.jsx',
        '*.test.js',
        '*.test.jsx',
        '*.spec.ts',
        '*.spec.tsx',
        '*.test.ts',
        '*.test.tsx',
      ],
      rules: {
        'no-magic-numbers': ['off'],
        'max-len': ['off'],
        'max-lines': ['off'],
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'arrow-body-style': ['off'],
    'default-param-last': 'off',
    indent: ['error', 2],
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'class-methods-use-this': ['off'],
    'no-plusplus': ['off'],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      },
    ],
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1, 2, 100],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'react/button-has-type': ['off'],
    'no-console': ['off'],
    'no-param-reassign': ['off'],
    'consistent-return': ['off'],
    'no-undef': ['off'],
    'max-params': ['error', 4],
    'max-lines': ['error', 250],
    'max-lines-per-function': ['off'],
    'react-func/max-lines-per-function': ['error', 50],
    complexity: ['error', 15],
    'object-curly-newline': ['off'],
    'import/prefer-default-export': ['off'],
    'sonarjs/cognitive-complexity': ['error', 15],
    'sonarjs/no-collapsible-if': ['error'],
    'sonarjs/no-collection-size-mischeck': ['error'],
    'sonarjs/no-duplicate-string': ['error'],
    'sonarjs/no-duplicated-branches': ['error'],
    'sonarjs/no-extra-arguments': ['error'],
    'sonarjs/no-identical-conditions': ['error'],
    'sonarjs/no-identical-expressions': ['error'],
    'sonarjs/no-identical-functions': ['error'],
    'sonarjs/no-inverted-boolean-check': ['error'],
    'sonarjs/no-one-iteration-loop': ['error'],
    'sonarjs/no-redundant-boolean': ['error'],
    'sonarjs/no-unused-collection': ['error'],
    'sonarjs/no-use-of-empty-return-value': ['error'],
    'sonarjs/no-useless-catch': ['error'],
    'sonarjs/prefer-object-literal': ['error'],
    'sonarjs/prefer-single-boolean-return': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/default-props-match-prop-types': [
      'error',
      {
        allowRequiredDefaults: false,
      },
    ],
    'react/require-default-props': [
      'error',
      {
        functions: 'defaultArguments',
      },
    ],
    'react/no-array-index-key': ['off'],
    'react/destructuring-assignment': ['error', 'always'],
    'react/forbid-component-props': ['error'],
    'react/forbid-prop-types': ['error'],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: false,
      },
    ],
    'react/prefer-stateless-function': ['off'],
    'react/no-access-state-in-setstate': ['error'],
    'react/no-redundant-should-component-update': ['error'],
    'react/no-this-in-sfc': ['error'],
    'react/no-typos': ['error'],
    'react/no-unsafe': ['error'],
    'react/no-unused-state': ['error'],
    'react/no-will-update-set-state': ['error'],
    'react/prefer-es6-class': ['error', 'always'],
    'react/self-closing-comp': ['error'],
    'react/state-in-constructor': ['off'],
    'react/void-dom-elements-no-children': ['error'],
    'react/jsx-closing-bracket-location': ['error'],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-curly-newline': ['error'],
    'react/jsx-fragments': ['error'],
    'react/jsx-max-depth': [
      'error',
      {
        max: 4,
      },
    ],
    'react/jsx-no-useless-fragment': ['error'],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
      },
    ],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-indent': [
      'error',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': ['error'],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'react-redux/connect-prefer-named-arguments': ['error'],
    'react-redux/no-unused-prop-types': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
  },
};
