import TwigDisplayHeadings from './display-headings.local.twig'
import DisplayHeadingsDocs from '!!raw-loader!./display-headings.docs.mdx'


export default {
  title: 'Foundations/Display headings',
  parameters: {
    componentSubtitle: 'HTML display heading elements (h1-h6)',
    docs: {
      description: {
        component: DisplayHeadingsDocs,
      },
    },
    storySource: {
      source: 'No source code available',
    },
  },
}

export const Example = (args) => TwigDisplayHeadings(args);
