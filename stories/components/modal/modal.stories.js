import modalTemplate from './modal.twig';
import modalSource from './modal.twig?raw';

export default {
  title: 'Components/Modal',
  parameters: {
    componentSource: {
      code: modalSource,
      language: 'twig',
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