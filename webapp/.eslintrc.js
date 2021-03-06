module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  plugins: [
    'vue', // required to lint *.vue files
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn',
    'max-len': 'off',
    'global-require': 'off',
    'prefer-destructuring': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'radix': 'off',
    'vue/return-in-computed-property': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },

};
