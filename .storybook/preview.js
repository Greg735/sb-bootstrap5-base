/** @type { import('@storybook/html').Preview } */
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../public/js/sb-main.js';
import Twig from 'twig';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../public/css/style.css'

// Configure for use with Twig.
const { addDrupalExtensions } = require('drupal-twig-extensions/twig')
addDrupalExtensions(Twig)

// // Exemple de filtre personnalisé
// const customFilter = (value) => {
//   // Transforme la valeur (par exemple, mettre en majuscules)
//   return value.toUpperCase();
// };
// // Ajout du filtre personnalisé à Twig
// Twig.extendFilter('custom', customFilter);
// Twig.extendFunction('custom', customFilter);

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Documentation',
          ['Introduction', 'Installation', 'Theme Setup', 'Theme Usage', '*'],
          'Foundations',
          'Utilities',
          'Sections',
          ['Content'],
          'Components',
          // ['Alert', 'Badge', 'Button', 'Link', 'Card', 'Tabs', 'Section', ['Section', '*'], '*'],
          'Recipes',
          'Examples',
        ],
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      // defaultViewport: 'iphone14promax',
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#000' },
      ],
    },
    viewMode: 'docs',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs']
};

export default preview;
