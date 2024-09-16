import tooltipsTemplate from './tooltips.local.twig';
import tooltipsDocs from '!!raw-loader!./tooltips.docs.mdx';
import tooltipsSource from '!!raw-loader!./tooltips.local.twig';

export default {
  title: 'Utilities/Tooltips',
	parameters: {
    docs: {
      description: {
        component: tooltipsDocs,
      },
    },
	},
  tags: ['autodocs'],
  args: {
  },
};

export const HTMLExample = (args) => tooltipsTemplate(args);
