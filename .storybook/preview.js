/** @type { import('@storybook/html-vite').Preview } */

// Styles and the Gulp JS bundle are loaded via preview-head.html to avoid
// MIME-type conflicts with Vite's module system.
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from 'storybook/viewport';

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Documentation',
          // ['Introduction', 'Installation', 'Theme Setup', 'Theme Usage', '*'],
          'Foundations',
          ['headings', '*'],
          'Utilities',
          'Sections',
          ['Content'],
          'Components',
          // ['Alert', 'Badge', 'Button', 'Link', 'Card', 'Tabs', 'Section', ['Section', '*'], '*'],
          'Pages',
          'Recipes',
          'Examples',
        ],
      },
    },

    viewport: {
      options: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },

    backgrounds: {
      options: {
        light: { name: 'light', value: '#fff' },
        dark: { name: 'dark', value: '#000' }
      },
    },

    viewMode: 'docs',

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
  tags: ['autodocs'],
};

export default preview;
