// src/components/badge/badge.stories.js

import './badge.scss';
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
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] 
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
  pill: false,
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success Badge',
  type: 'success',
  pill: false,
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Badge',
  type: 'danger',
  pill: false,
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning Badge',
  type: 'warning',
  pill: false,
};

export const Info = Template.bind({});
Info.args = {
  label: 'Info Badge',
  type: 'info',
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
