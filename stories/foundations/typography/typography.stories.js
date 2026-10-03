import TwigTypography from './typography.local.twig'
import TypographyDocs from './typography.docs.md?raw'


export default {
  title: 'Foundations/Typography',
  parameters: {
    componentSubtitle: 'Typography used in website.',
    docs: {
      description: {
        component: TypographyDocs,
      },
    },
  },
}

export const Example = (args) => TwigTypography(args);
