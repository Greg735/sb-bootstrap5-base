import SeparatorDocs from '!!raw-loader!./separator.docs.mdx';
import SeparatorSource from '!!raw-loader!./separator.twig';


export default {
  title: 'Components/Separator',
  parameters: {
    storySource: {
      source: SeparatorSource,
    },
  },
  argTypes: {
    separator_classes: {
      control: 'array',
      description: 'CSS classes to apply to the separator.',
      defaultValue: null,
      table: {
        type: {summary: 'array'},
        defaultValue: {summary: 'null'},
      },
    },
  },
};

const Template = (args) => {
  // Import the Twig template and pass in the args
  const template = require('./separator.twig');
  return template(args);
};

export const Default = Template.bind({});
Default.args = {
  // separator_classes: [''],
};

export const WithClasses = Template.bind({});
WithClasses.args = {
  separator_classes: ['border-danger', 'border-3', 'mt-5', 'mb-5'],
};