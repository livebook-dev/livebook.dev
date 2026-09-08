import type { ThemeRegistrationRaw } from "shiki";

/**
 * Shiki theme matching Livebook's code editor.
 *
 * The colors come from Livebook's CodeMirror highlight style, see
 * assets/js/hooks/cell_editor/live_editor/codemirror/theme.js in
 * livebook-dev/livebook. TextMate scopes are mapped to the Lezer tags
 * Livebook styles, so highlighting looks the same as in the editor.
 */

export const colors = {
  background: "#282c34",
  backgroundLighter: "#2f343e",
  backgroundLightest: "#454a56",
  border: "#363c46",
  lineNumber: "#60646c",
  matchingText: "#73ade8",
  base: "#c8ccd4",
  lightRed: "#e06c75",
  blue: "#61afef",
  gray: "#8c92a3",
  green: "#98c379",
  purple: "#c678dd",
  red: "#be5046",
  teal: "#56b6c2",
  peach: "#d19a66",
  yellow: "#e5c07b",
};

const theme: ThemeRegistrationRaw = {
  name: "livebook",
  type: "dark",
  colors: {
    "editor.background": colors.background,
    "editor.foreground": colors.base,
  },
  settings: [
    {
      scope: ["source", "punctuation", "meta"],
      settings: { foreground: colors.base },
    },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: colors.gray },
    },
    {
      scope: ["string", "punctuation.definition.string", "string.quoted"],
      settings: { foreground: colors.green },
    },
    {
      scope: ["string.regexp", "string.other", "constant.other.sigil"],
      settings: { foreground: colors.yellow },
    },
    {
      scope: ["constant.character.escape"],
      settings: { foreground: colors.blue },
    },
    {
      scope: [
        "constant.numeric",
        "constant.language",
        "constant.other.symbol",
        "constant.other.keywords",
        "punctuation.definition.constant",
      ],
      settings: { foreground: colors.blue },
    },
    {
      scope: ["keyword", "storage", "keyword.control", "keyword.other"],
      settings: { foreground: colors.purple },
    },
    { scope: ["keyword.operator"], settings: { foreground: colors.peach } },
    {
      // Elixir aliases (Foo.Bar), Erlang atoms used as modules
      scope: [
        "entity.name.type",
        "entity.name.class",
        "support.class",
        "support.type",
      ],
      settings: { foreground: colors.teal },
    },
    {
      scope: ["entity.name.function", "support.function", "meta.function-call"],
      settings: { foreground: colors.blue },
    },
    {
      // Module attributes (@doc), Erlang variables
      scope: [
        "variable.other.constant",
        "variable.language",
        "entity.other.attribute-name",
      ],
      settings: { foreground: colors.lightRed },
    },
    {
      scope: ["variable", "variable.other"],
      settings: { foreground: colors.base },
    },
    {
      scope: ["punctuation.section.embedded"],
      settings: { foreground: colors.red },
    },
    { scope: ["markup.heading"], settings: { foreground: colors.lightRed } },
    { scope: ["markup.inserted"], settings: { foreground: colors.green } },
    { scope: ["markup.deleted"], settings: { foreground: colors.lightRed } },
  ],
};

export default theme;
