// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
    },
    env: {
        browser: true,
        node: true,
    },
    extends: "eslint:recommended",
    // add your custom rules here
    rules: {},
};
