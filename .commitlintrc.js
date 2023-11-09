// export default {
//   extends: ["@commitlint/config-conventional"]
// };
// .commitlintrc.js
/** @type {import("cz-git").UserConfig} */
export default {
  // rules: {
  //   // @see: https://commitlint.js.org/#/reference-rules
  //   "header-max-length": [0, "always", 72]
  // },
  rules: {
    // "body-leading-blank": [1, "always"],
    // "body-max-line-length": [2, "always", 100],
    // "footer-leading-blank": [1, "always"],
    // "footer-max-line-length": [2, "always", 100],
    // "header-max-length": [2, "always", 100],
    // "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
    // "subject-empty": [2, "never"],
    // "subject-full-stop": [2, "never", "."],
    // "type-case": [2, "always", "lower-case"],
    // "type-empty": [2, "never"],
    "type-enum": [2, "always", ["build", "chore", "ci", "docs", "✨特性", "fix", "perf", "refactor", "revert", "style", "test"]]
  },
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixesSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefix: "Input ISSUES prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      generatingByAI: "Generating your AI commit subject...",
      generatedSelectByAI: "Select suitable subject by AI generated:",
      confirmCommit: "Are you sure you want to proceed with the commit above?"
    },
    types: [
      { value: "✨特性", name: "特性:    一个新的特性" },
      { value: "🐛修复", name: "修复:    修复一个Bug" },
      { value: "📝文档", name: "文档:    变更的只有文档" },
      { value: "💄格式", name: "格式:    空格, 分号等格式修复" },
      { value: "♻️重构", name: "重构:    代码重构，注意和特性、修复区分开" },
      { value: "⚡️性能", name: "性能:    提升性能" },
      { value: "✅测试", name: "测试:    添加一个测试" },
      { value: "🔧工具", name: "工具:    开发工具变动(构建、脚手架工具等)" },
      { value: "⏪回滚", name: "回滚:    代码回退" }
    ],
    useEmoji: false,
    emojiAlign: "center",
    useAI: false,
    aiNumber: 1,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixes: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "skip",
    customIssuePrefixAlias: "custom",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
