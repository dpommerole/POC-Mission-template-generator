module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // préférer utiliser `plugin:vue/strongly-recommended` ou `plugin:vue/recommended` pour des règles stictes.
    "plugin:vue/recommended",
    "standard"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "no-debugger": "error",
    "no-trailing-spaces": "error",
    "no-return-await": "off",
    "no-throw-literal": "off",
    "no-undef": "off",
    "no-unmodified-loop-condition": "off"
    }
}
