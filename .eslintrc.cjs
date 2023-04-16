// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
    overrides: [
        {
            extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
            files: ["*.ts", "*.tsx"],
            parserOptions: {
                project: path.join(__dirname, "tsconfig.json"),
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
    },
    plugins: ["@typescript-eslint"],
    extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
    rules: {
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                prefer: "type-imports",
                fixStyle: "inline-type-imports",
            },
        ],
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksVoidReturn: {
                    // Allow `void` return type for JSX attributes such as `onClick` / `onSubmit`
                    attributes: false,
                },
            },
        ],
    },
    settings: {
        tailwindcss: {
            callees: ["cn"],
        },
    },
};

module.exports = config;
