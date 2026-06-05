export default {
  branches: ['main'],
  repositoryUrl: 'git@github.com:emulsify-ds/emulsify-drupal-starter.git',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {
            subject: 'initial sync with newly built whisk starter*',
            release: 'major'
          },
          {
            subject: 'sync starter with Emulsify Core 4 Whisk baseline*',
            release: 'major'
          }
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        }
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        },
        writerOpts: {
          commitsSort: ['subject', 'scope']
        }
      }
    ],
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/github'
  ]
};
