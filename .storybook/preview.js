/** @type { import('@storybook/html').Preview } */
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../stories/styles/main.scss';
import Twig from 'twig';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemeByDataAttribute } from '@storybook/addon-themes';


// Exemple de filtre personnalisé
const customFilter = (value) => {
  // Transforme la valeur (par exemple, mettre en majuscules)
  return value.toUpperCase();
};
// Ajout du filtre personnalisé à Twig
Twig.extendFilter('custom', customFilter);
Twig.extendFunction('custom', customFilter);

const preview = {
  parameters: {
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
};

export default preview;
