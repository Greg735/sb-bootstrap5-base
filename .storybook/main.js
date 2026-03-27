/** @type { import('@storybook/html-webpack5').StorybookConfig } */

const path = require('path');

const config = {
  stories: ['../stories/**/*.@(stories.@(js|jsx|ts|tsx))'],
  staticDirs: [{
    from: '../stories/assets',
    to: '/assets'
  }],
  addons: [
    "@storybook/addon-links",
		{
			name: '@storybook/addon-essentials',
			options: {
				actions: false,
			},
		},
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    // '@storybook/addon-viewport',
    // '@storybook/addon-themes',
    // '@chromatic-com/storybook'
  ],
  docs: {
    // set to change the name of generated docs entries
    defaultName: "Docs"
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
