/** @type { import('@storybook/html-vite').StorybookConfig } */

const config = {
  stories: ['../stories/**/*.@(stories.@(js|jsx|ts|tsx))'],
  staticDirs: ['../public', { from: '../stories/assets', to: '/assets' }],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    // '@storybook/addon-themes',
    // '@chromatic-com/storybook'
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  docs: {
    // set to change the name of generated docs entries
    defaultName: 'Docs',
  },
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  core: {
    allowedHosts: ['sb-bootstrap5-base.ddev.site'],
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const { default: twigDrupal } = await import('vite-plugin-twig-drupal');

    return mergeConfig(config, {
      plugins: [
        twigDrupal({
          // Exclude ?raw imports so Vite's built-in raw handling takes over
          pattern: /\.twig$/,
        }),
        {
          name: 'storybook:assets-css-reload',
          configureServer(server) {
            server.watcher.add('./public/css/style.css');
            server.watcher.on('change', (file) => {
              if (file.includes('style.css')) {
                server.ws.send({ type: 'full-reload' });
              }
            });
          },
        },
      ],
      server: {
        allowedHosts: ['sb-bootstrap5-base.ddev.site'],
      },
    });
  },
};

export default config;
