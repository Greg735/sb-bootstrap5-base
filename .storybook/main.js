/** @type { import('@storybook/html-webpack5').StorybookConfig } */

const path = require('path');

const config = {
  stories: ['../stories/**/*.@(stories.@(js|jsx|ts|tsx))'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-storysource",
    '@storybook/addon-a11y',
    // '@storybook/addon-viewport',
    // '@storybook/addon-themes',
    'storybook-source-code-addon',
  ],
  docs: {
    autodocs: true, // see below for alternatives
    defaultName: "Docs", // set to change the name of generated docs entries
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.twig$/,
        use: [
          {
            loader: 'twig-loader',
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    );

    
    return config;
  }
};
export default config;
