import buttonTemplate from './button.html.twig';
import ButtonSource from '!!raw-loader!./button.html.twig';


export default {
  title: 'Components/Button',
  parameters: {
    componentSource: {
      code: ButtonSource,
      language: 'twig',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'select'}, 
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'] 
    },
    size: {
      control: { type: 'select'}, 
      options: ['sm', 'default', 'lg'] 
    },
    outlined: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    full_width: {
      control: { type: 'boolean' }
    },
  },
};

const Template = (args) => buttonTemplate(args);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary button',
  type: 'primary',
  size: 'default',
  outlined: false,
  disabled: false,
  full_width: false,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Secondary button',
//   type: 'secondary',
//   pill: false,
// };

// export const Success = Template.bind({});
// Success.args = {
//   label: 'Success button',
//   type: 'success',
//   pill: false,
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   label: 'Danger button',
//   type: 'danger',
//   pill: false,
// };

// export const Warning = Template.bind({});
// Warning.args = {
//   label: 'Warning button',
//   type: 'warning',
//   pill: false,
// };

// export const Info = Template.bind({});
// Info.args = {
//   label: 'Info button',
//   type: 'info',
//   pill: false,
// };

// export const Light = Template.bind({});
// Light.args = {
//   label: 'Light button',
//   type: 'light',
//   pill: false,
// };

// export const Dark = Template.bind({});
// Dark.args = {
//   label: 'Dark button',
//   type: 'dark',
//   pill: false,
// };
