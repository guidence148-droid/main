import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve current file directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setup compatibility with legacy ESLint configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Folders and files to ignore
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Allow 'any' types without blocking build
      "@typescript-eslint/no-explicit-any": "off",

      // Warnings for unused vars; ignore variables starting with _
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    },
  },
];

export default eslintConfig;
