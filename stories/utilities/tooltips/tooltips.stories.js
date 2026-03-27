import tooltipsTemplate from './tooltips.local.twig';
import tooltipsDocs from '!!raw-loader!./tooltips.docs.mdx';

export default {
  title: 'Utilities/Tooltips',
  parameters: {
    docs: {
      description: {
        component: tooltipsDocs,
      },
    },
    storySource: {
      source: 'No source code available',
    },
  },
  tags: ['autodocs'],
  args: {},
};

export const HTMLExample = (args) => tooltipsTemplate(args);
