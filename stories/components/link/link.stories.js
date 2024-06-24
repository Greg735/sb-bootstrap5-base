
import linkTemplate from './link.html.twig';

export default {
  title: 'Components/Link',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    link_url: { control: 'text' },
    link_title: { control: 'text' },
    type: {
      control: { type: 'select'}, 
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] 
    },
    target: {
      control: { type: 'select' }, 
      options: ['_self', '_blank'] 
    },
    disabled: { control: 'boolean' }
  },
};

const Template = (args) => linkTemplate(args);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary link',
  link_url: 'https://example.com',
  type: 'primary',
  link_title: 'Primary link title',
  target: '_self',
  disabled: false,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Secondary link',
//   type: 'secondary',
//   pill: false,
// };

// export const Success = Template.bind({});
// Success.args = {
//   label: 'Success link',
//   type: 'success',
//   pill: false,
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   label: 'Danger link',
//   type: 'danger',
//   pill: false,
// };

// export const Warning = Template.bind({});
// Warning.args = {
//   label: 'Warning link',
//   type: 'warning',
//   pill: false,
// };

// export const Info = Template.bind({});
// Info.args = {
//   label: 'Info link',
//   type: 'info',
//   pill: false,
// };

// export const Light = Template.bind({});
// Light.args = {
//   label: 'Light link',
//   type: 'light',
//   pill: false,
// };

// export const Dark = Template.bind({});
// Dark.args = {
//   label: 'Dark link',
//   type: 'dark',
//   pill: false,
// };
