import TwigDisplayHeadings from './display-headings.local.twig'
import DisplayHeadingsDocs from './display-headings.docs.md?raw'


export default {
  title: 'Foundations/Display headings',
  parameters: {
    componentSubtitle: 'HTML display heading elements (h1-h6)',
    docs: {
      description: {
        component: DisplayHeadingsDocs,
      },
    },
  },
}

export const Example = (args) => TwigDisplayHeadings(args);
