module.exports = {
  tagFormat: '${version}',
  branches: ['main'],
  repositoryUrl: 'git@github.com:emulsify-ds/emulsify-drupal-starter.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/github',
  ],
};
