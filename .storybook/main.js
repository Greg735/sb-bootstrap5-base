/** @type { import('@storybook/html-vite').StorybookConfig } */

import fs from 'node:fs/promises';
import path from 'node:path';

function legacyRawAndTwigPlugin() {
  return {
    name: 'legacy-raw-and-twig-plugin',
    async resolveId(source, importer) {
      if (!source.startsWith('!!raw-loader!')) {
        return null;
      }

      const request = source.replace(/^!!raw-loader!/, '');
      const resolved = await this.resolve(request, importer, { skipSelf: true });

      if (resolved) {
        return `\0legacy-raw:${resolved.id}`;
      }

      if (!importer) {
        return null;
      }

      return `\0legacy-raw:${path.resolve(path.dirname(importer), request)}`;
    },
    async load(id) {
      if (id.startsWith('\0legacy-raw:')) {
        const rawId = id.replace('\0legacy-raw:', '').split('?')[0];
        const source = await fs.readFile(rawId, 'utf8');
        return `export default ${JSON.stringify(source)};`;
      }

      if (!id.endsWith('.twig')) {
        return null;
      }

      const source = await fs.readFile(id.split('?')[0], 'utf8');
      return `
import Twig from 'twig';

const template = Twig.twig({
  data: ${JSON.stringify(source)},
  path: ${JSON.stringify(id)},
  allowInlineIncludes: true,
});

export default function render(context = {}) {
  return template.render(context);
}
`;
    },
  };
}

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
    name: "@storybook/html-vite",
    options: {}
  },
  core: {
    allowedHosts: [
      'sb-bootstrap5-base.ddev.site',
      'localhost',
      '127.0.0.1',
    ],
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(legacyRawAndTwigPlugin());
    return config;
  }
};
export default config;
