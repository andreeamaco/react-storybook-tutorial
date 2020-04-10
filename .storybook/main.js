module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-info',
    '@storybook/addon-links',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-knobs/register',
  ]
};
