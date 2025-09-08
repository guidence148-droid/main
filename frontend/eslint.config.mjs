import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create FlatCompat instance for backward-compatible config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    // Ignore folders and files not relevant for linting
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],

    // Customize rules
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // allow 'any' without blocking build
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // warn only
    },
  },
];

export default eslintConfig;