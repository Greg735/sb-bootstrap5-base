import separatorTemplate from './separator.twig';
import SeparatorDocs from './separator.docs.md?raw';
import SeparatorSource from './separator.twig?raw';


export default {
  title: 'Components/Separator',
  parameters: {
    componentSource: {
      code: SeparatorSource,
      language: 'twig',
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

const Template = (args) => separatorTemplate(args);

export const Default = Template.bind({});
Default.args = {
  // separator_classes: [''],
};

export const WithClasses = Template.bind({});
WithClasses.args = {
  separator_classes: ['border-danger', 'border-3', 'mt-5', 'mb-5'],
};