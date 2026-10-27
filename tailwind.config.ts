import type { Config } from "tailwindcss";
export default { darkMode: "class", content: ["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{bg:"rgb(var(--bg) / <alpha-value>)",fg:"rgb(var(--fg) / <alpha-value>)",muted:"rgb(var(--muted) / <alpha-value>)",card:"rgb(var(--card) / <alpha-value>)",line:"rgb(var(--line) / <alpha-value>)",accent:"rgb(var(--accent) / <alpha-value>)"}}},plugins:[]} satisfies Config;
