module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji} {subject}',
  list: [
    'chore',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'release',
    'revert',
    'style',
    'test',
    'wip',
  ],
  maxMessageLength: 100,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues'],
  scopes: [
    'apps',
    'core',
    'core-components',
    'e2e',
    'libs',
    'linter',
    'misc',
    'nx',
    'portfolio-core',
    'repo',
    'storybook',
    'tailwindcss',
    'testing',
  ],
  types: {
    chore: {
      description:
        'Changes to the build process or auxiliary tools\n and libraries such as documentation generation',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI related changes',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '📝',
      value: 'docs',
    },
    feat: {
      description: 'A new feature',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '💥',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '🛠',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🚀',
      value: 'release',
    },
    revert: {
      description: 'Revert to a commit',
      emoji: '⏪',
      value: 'revert',
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'Adding missing tests',
      emoji: '✅',
      value: 'test',
    },
    wip: {
      description: 'Work in progress',
      emoji: '🚧',
      value: 'wip',
    },
    messages: {
      type: "Select the type of change that you're committing:",
      scope: '\nDenote the SCOPE of this change (optional):',
      // used if allowCustomScopes is true
      customScope: 'Denote the SCOPE of this change:',
      subject:
        'Write a SHORT, IMPERATIVE (lowercase) description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional):\n',
      footer:
        'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
  },
};
