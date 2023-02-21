module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    // override/add rules settings here, such as:
    "no-unused-vars": 1,
    "vue/no-unused-vars": 1,
    "vue/multi-word-component-names": 0,
    "prettier/prettier": 1,
  },
};
