module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".d.ts"],
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/forbid-prop-types": [1, { forbid: ["any"] }],
    "react/prop-types": ["error", { ignore: ["children"] }],
    "react/jsx-filename-extension": 0,
    "react/no-multi-comp": 0,
    "react/jsx-props-no-spreading": 0,
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
