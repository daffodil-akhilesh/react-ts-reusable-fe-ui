// .storybook/main.js
const path = require('path');

module.exports = {
  addons: ['@storybook/addon-essentials','@storybook/addon-viewport'],
  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
  }),
  framework: '@storybook/react',
  stories: ['../stories/*.stories.(ts|md)x'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      fs: path.resolve(__dirname, 'fsMock.js'),
    };
    return config;
  },
  parameters: {
    controls: { expanded: true },
  },
};