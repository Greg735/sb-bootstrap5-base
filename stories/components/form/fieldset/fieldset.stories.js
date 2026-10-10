import FieldsetDocs from './fieldset.docs.md?raw';
import FieldsetSource from './fieldset.twig?raw';
import { renderFieldset, renderFormElement } from '../form.helpers';

export default {
  title: 'Components/Form/Fieldset',
  parameters: {
    docs: {
      description: {
        component: FieldsetDocs,
      },
    },
    componentSource: {
      code: FieldsetSource,
      language: 'twig',
    },
  },
  argTypes: {
    title: { control: 'text', description: '`#title`' },
    description: { control: 'text', description: '`#description`' },
    required: { control: 'boolean', description: '`#required`' },
  },
};

const Template = (args) => renderFieldset({
  ...args,
  children: [
    renderFormElement({ name: 'street', title: 'Street', required: true }),
    '<div class="row">',
    `<div class="col-md-4">${renderFormElement({ name: 'postal_code', title: 'Postal code' })}</div>`,
    `<div class="col-md-8">${renderFormElement({ name: 'city', title: 'City' })}</div>`,
    '</div>',
  ].join(''),
});

export const Default = Template.bind({});
Default.args = {
  title: 'Address',
  description: 'Your postal address.',
  required: false,
};
