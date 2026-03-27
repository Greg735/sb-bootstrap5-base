import TwigTypography from './typography.local.twig'
import TypographyDocs from '!!raw-loader!./typography.docs.mdx'


export default {
  title: 'Foundations/Typography',
  parameters: {
    componentSubtitle: 'Typography used in website.',
    docs: {
      description: {
        component: TypographyDocs,
      },
    },
    storySource: {
      source: 'No source code available',
    },
  },
}

export const Example = (args) => TwigTypography(args);
