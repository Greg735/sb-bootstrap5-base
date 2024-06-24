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
      options: ['blue', 'gray', 'green', 'red', 'orange', 'cyan', 'light', 'dark', 'white', 'black'] 
    },
    pill: {
      control: 'boolean'
    }
  },
};

const Template = (args) => badgeTemplate(args);

export const Blue = Template.bind({});
Blue.args = {
  label: 'Blue Badge',
  type: 'blue',
  pill: false,
};

export const Gray = Template.bind({});
Gray.args = {
  label: 'Gray Badge',
  type: 'gray',
  pill: false,
};

export const Green = Template.bind({});
Green.args = {
  label: 'Green Badge',
  type: 'green',
  pill: false,
};

export const Red = Template.bind({});
Red.args = {
  label: 'Red Badge',
  type: 'red',
  pill: false,
};

export const Orange = Template.bind({});
Orange.args = {
  label: 'Orange Badge',
  type: 'orange',
  pill: false,
};

export const Cyan = Template.bind({});
Cyan.args = {
  label: 'Cyan Badge',
  type: 'cyan',
  pill: false,
};

export const Light = Template.bind({});
Light.args = {
  label: 'Light Badge',
  type: 'light',
  pill: false,
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Dark Badge',
  type: 'dark',
  pill: false,
};
