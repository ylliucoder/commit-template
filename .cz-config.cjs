module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    { value: "docs", name: "docs:     Documentation only changes" },
    {
      value: "style",
      name: "style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)"
    },
    {
      value: "refactor",
      name: "refactor: A code change that neither fixes a bug nor adds a feature"
    },
    {
      value: "perf",
      name: "perf:     A code change that improves performance"
    },
    { value: "test", name: "test:     Adding missing tests" },
    {
      value: "chore",
      name: "chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation"
    },
    { value: "revert", name: "revert:   Revert to a commit" },
    { value: "WIP", name: "WIP:      Work in progress" }
  ],

  scopes: [{ name: "accounts" }, { name: "admin" }, { name: "exampleScope" }, { name: "changeMe" }],

  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer: "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?"
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  // skipQuestions: ['scope', 'body'],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};

// module.exports = {
//   types: [
//     { value: "✨特性", name: "特性:    一个新的特性" },
//     { value: "🐛修复", name: "修复:    修复一个Bug" },
//     { value: "📝文档", name: "文档:    变更的只有文档" },
//     { value: "💄格式", name: "格式:    空格, 分号等格式修复" },
//     { value: "♻️重构", name: "重构:    代码重构，注意和特性、修复区分开" },
//     { value: "⚡️性能", name: "性能:    提升性能" },
//     { value: "✅测试", name: "测试:    添加一个测试" },
//     { value: "🔧工具", name: "工具:    开发工具变动(构建、脚手架工具等)" },
//     { value: "⏪回滚", name: "回滚:    代码回退" }
//   ],
//   scopes: [{ name: "模块1" }, { name: "模块2" }, { name: "模块3" }, { name: "模块4" }],
//   // it needs to match the value for field type. Eg.: 'fix'
//   /*  scopeOverrides: {
//     fix: [
//       {name: 'merge'},
//       {name: 'style'},
//       {name: 'e2eTest'},
//       {name: 'unitTest'}
//     ]
//   },  */
//   // override the messages, defaults are as follows
//   messages: {
//     type: "选择一种你的提交类型:",
//     scope: "选择一个scope (可选):",
//     // used if allowCustomScopes is true
//     customScope: "Denote the SCOPE of this change:",
//     subject: "短说明:\n",
//     body: '长说明，使用"|"换行(可选)：\n',
//     breaking: "非兼容性说明 (可选):\n",
//     footer: "关联关闭的issue，例如：#31, #34(可选):\n",
//     confirmCommit: "确定提交说明?(yes/no)"
//   },
//   allowCustomScopes: true,
//   allowBreakingChanges: ["特性", "修复"],
//   // limit subject length
//   subjectLimit: 100
// };
