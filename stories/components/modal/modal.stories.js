import modalTemplate from './modal.twig';
import modalSource from '!!raw-loader!!./modal.twig';

export default {
  title: 'Components/Modal',
  parameters: {
    storySource: {
      source: modalSource,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
    modal_classes: {
      control: 'array',
      description: 'Array of classes',
      table: {
        type: {summary: 'array'},
      },
    },
  },
};

const Template = (args) => modalTemplate(args);

export const Modal = Template.bind({});
Modal.args = {
  modal_id: 'exempleModal',
  content: 'Modal',
  modal_classes: ['']
};