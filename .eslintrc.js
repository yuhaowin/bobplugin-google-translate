module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'airbnb-base'],
  plugins: ['prettier'],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  globals: {
    $log: false,
    $info: false,
    $option: false,
    $http: false,
    $file: false,
    $data: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'no-var': 'off',
    'vars-on-top': 'off',
    'import/no-named-as-default-member': 'off',
    'prefer-destructuring': 'off',
    'object-curly-newline': 'off',
    'max-len': ['error', { code: 120 }],
    'import/no-mutable-exports': 'off',
    'consistent-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-return-assign': 'off',
  },
};
