import badgeTemplate from './badge.html.twig';
import BadgeSource from '!!raw-loader!./badge.html.twig';
import BadgeDocs from '!!raw-loader!./badge.docs.mdx';

export default {
  title: 'Components/Badge',
  parameters: {
    componentSource: {
      code: BadgeSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: BadgeDocs,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'select'}, 
      options: ['primary', 'secondary', 'blue', 'indigo', 'purple', 'yellow', 'teal', 'pink', 'gray', 'green', 'red', 'orange', 'cyan', 'light', 'dark', 'white', 'black'] 
    },
    pill: {
      control: 'boolean'
    }
  },
};

const Template = (args) => badgeTemplate(args);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Badge',
  type: 'primary',
  pill: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Badge',
  type: 'secondary',
};

export const Blue = Template.bind({});
Blue.args = {
  ...Primary.args,
  label: 'Blue Badge',
  type: 'blue',
};

export const Indigo = Template.bind({});
Indigo.args = {
  ...Primary.args,
  label: 'Indigo Badge',
  type: 'indigo',
};

export const Purple = Template.bind({});
Purple.args = {
  ...Primary.args,
  label: 'Purple Badge',
  type: 'purple',
};

export const Pink = Template.bind({});
Pink.args = {
  ...Primary.args,
  label: 'Pink Badge',
  type: 'pink',
};

export const Yellow = Template.bind({});
Yellow.args = {
  ...Primary.args,
  label: 'Yellow Badge',
  type: 'yellow',
};

export const Teal = Template.bind({});
Teal.args = {
  ...Primary.args,
  label: 'Teal Badge',
  type: 'teal',
};

export const Gray = Template.bind({});
Gray.args = {
  ...Primary.args,
  label: 'Gray Badge',
  type: 'gray',
};

export const Green = Template.bind({});
Green.args = {
  ...Primary.args,
  label: 'Green Badge',
  type: 'green',
};

export const Red = Template.bind({});
Red.args = {
  ...Primary.args,
  label: 'Red Badge',
  type: 'red',
};

export const Orange = Template.bind({});
Orange.args = {
  ...Primary.args,
  label: 'Orange Badge',
  type: 'orange',
};

export const Cyan = Template.bind({});
Cyan.args = {
  ...Primary.args,
  label: 'Cyan Badge',
  type: 'cyan',
};

export const Light = Template.bind({});
Light.args = {
  ...Primary.args,
  label: 'Light Badge',
  type: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  ...Primary.args,
  label: 'Dark Badge',
  type: 'dark',
};
