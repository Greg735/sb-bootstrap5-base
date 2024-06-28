import buttonTemplate from './button.html.twig';
import ButtonSource from '!!raw-loader!./button.html.twig';


export default {
  title: 'Components/Button/Button',
  parameters: {
    componentSource: {
      code: ButtonSource,
      language: 'twig',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type_attr: {
      control: { type: 'radio'}, 
      options: ['button', 'submit', 'reset'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "button" },
      },    },
    type: {
      control: { type: 'select'}, 
      options: ['primary', 'secondary', 'blue', 'gray', 'green', 'red', 'orange', 'cyan', 'light', 'dark', 'white', 'black'] 
    },
    size: {
      control: { type: 'radio'}, 
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
  type_attr: 'button',
  type: 'primary',
  size: 'default',
  outlined: false,
  disabled: false,
  full_width: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  label: 'Secondary button',
  type: 'secondary',
};

export const Blue = Template.bind({});
Blue.args = {
  ...Primary.args,
  label: 'Blue button',
  type: 'blue',
};

export const Gray = Template.bind({});
Gray.args = {
  ...Primary.args,
  label: 'Gray button',
  type: 'gray',
};

export const Green = Template.bind({});
Green.args = {
  ...Primary.args,
  label: 'Green button',
  type: 'green',
};

export const Red = Template.bind({});
Red.args = {
  ...Primary.args,
  label: 'Red button',
  type: 'red',
};

export const Orange = Template.bind({});
Orange.args = {
  ...Primary.args,
  label: 'Orange button',
  type: 'orange',
};

export const Cyan = Template.bind({});
Cyan.args = {
  ...Primary.args,
  label: 'Cyan button',
  type: 'cyan',
};


export const Light = Template.bind({});
Light.args = {
  ...Primary.args,
  label: 'Light button',
  type: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  ...Primary.args,
  label: 'Dark button',
  type: 'dark',
};

export const White = Template.bind({});
White.args = {
  ...Primary.args,
  label: 'White button',
  type: 'white',
};

export const Black = Template.bind({});
Black.args = {
  ...Primary.args,
  label: 'Black button',
  type: 'black',
};
