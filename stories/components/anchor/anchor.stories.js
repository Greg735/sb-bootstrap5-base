import anchorTemplate from './anchor.twig';
import AnchorSource from '!!raw-loader!./anchor.twig';
import AnchorDocs from '!!raw-loader!./anchor.docs.mdx';

export default {
  title: 'Components/Anchor',
  parameters: {
    componentSource: {
      code: AnchorSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: AnchorDocs,
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
  },
};

const Template = (args) => anchorTemplate(args);

export const Default = Template.bind({});
Default.args = {
  id: 'tabs',
};
