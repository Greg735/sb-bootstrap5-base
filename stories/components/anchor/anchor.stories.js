import anchorTemplate from './anchor.twig';
import AnchorSource from './anchor.twig?raw';
import AnchorDocs from './anchor.docs.md?raw';

export default {
  title: 'Components/Anchor',
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: AnchorDocs,
      },
    },
    componentSource: {
      code: AnchorSource,
      language: 'twig',
    },
  },
  argTypes: {
    id: {control: 'text'},
  },
};

const Template = (args) => anchorTemplate(args);

export const Default = Template.bind({});
Default.args = {
  id: 'tabs',
};
