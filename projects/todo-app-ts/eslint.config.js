import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    // parserOptions: {
    //   ecmaVersion: "latest",
    //   sourceType: "module",
    //   project: ".tsconfig.json",
    // },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);

// eslintrc.cjs vs eslint.config.js
// Sure thing! Let's dive into the nitty-gritty differences between .eslintrc.cjs and eslint.config.js.

// .eslintrc.cjs
// Format: This is typically used in the CommonJS format, hence the .cjs file extension.

// Purpose: It's an older way to configure ESLint, which has been widely used in many projects. You might see configurations like:

// javascript
// module.exports = {
//   rules: {
//     // ESLint rules go here
//   }
// };
// eslint.config.js
// Format: This uses the modern ECMAScript Modules (ESM) format.

// Purpose: It's the newer recommended way to set up ESLint configuration. This allows for more flexibility and features. An example configuration might look like:

// javascript
// export default {
//   rules: {
//     // ESLint rules go here
//   }
// };
// Key Differences
// Module System: .eslintrc.cjs uses CommonJS (module.exports), while eslint.config.js uses ESM (export default).

// Support & Future: eslint.config.js is the future-forward approach, aligning with modern JavaScript standards and practices.

// Flexibility: eslint.config.js can be more flexible with how you structure and manage your configurations.

// Switching to eslint.config.js can help you stay up-to-date with the latest JavaScript features and tools. If you're starting a new project, it's generally a good idea to go with eslint.config.js.

// Anything else you'd like to know or dive deeper into? 😊
