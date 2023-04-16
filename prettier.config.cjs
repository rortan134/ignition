/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
    plugins: [
        "prettier-plugin-packagejson",
        "@ianvs/prettier-plugin-sort-imports",
        // Must come last
        "prettier-plugin-tailwindcss",
    ],
    arrowParens: "always",
    bracketSpacing: true,
    bracketSameLine: true,
    embeddedLanguageFormatting: "auto",
    htmlWhitespaceSensitivity: "css",
    insertPragma: false,
    proseWrap: "preserve",
    quoteProps: "as-needed",
    requirePragma: false,
    semi: true,
    singleQuote: false,
    jsxSingleQuote: false,
    trailingComma: "es5",
    useTabs: false,
    printWidth: 100,
    tabWidth: 4,
    rangeStart: 0,
    endOfLine: "auto",
    tailwindConfig: "./tailwind.config.ts",
    importOrderSortSpecifiers: true,
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
};

module.exports = config;
