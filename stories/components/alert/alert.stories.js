
import './alert.scss';
import alertTemplate from './alert.html.twig';
import AlertDocs from '!!raw-loader!./alert.docs.mdx';
import AlertSource from '!!raw-loader!./alert.html.twig';


export default {
  title: 'Components/Alert',
	parameters: {
		componentSubtitle:
     'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
    componentSource: {
      code: AlertSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: AlertDocs,
      },
    },
	},
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
    text: { 
      control: 'text', 
      description: 'Can contains html tags.',
      type: {
        required: true,
      }
    },
    type: {
      control: { type: 'select'},
      defaultValue: "primary", 
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      table: {
        require: "true",
        type: { summary: 'string' },
        defaultValue: { summary: "primary" },
      },
    },
    dismissible: { 
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    hide_icon: { 
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
     }
  },
};

const Template = (args) => alertTemplate(args);


export const Primary = Template.bind({});
Primary.args = {
  text: 'This is an important text for the user to read.',
  type: 'primary',
  dismissible: false,
  hide_icon: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  type: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  type: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  type: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  ...Primary.args,
  type: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  ...Primary.args,
  type: 'info',
};

export const Light = Template.bind({});
Light.args = {
  ...Primary.args,
  type: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  ...Primary.args,
  type: 'dark',
};

export const PrimaryDismissible = Template.bind({});
PrimaryDismissible.args = {
  ...Primary.args,
  dismissible: true,
};

export const SuccessBigMessage = Template.bind({});
SuccessBigMessage.args = {
  ...Primary.args,
  type: 'success',
  text: '<h4 class="alert-heading">Well done!</h4><p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p><hr><p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>',
  hide_icon: false,
};
SuccessBigMessage.parameters = {
	// backgrounds: { default: 'dark' },
  backgrounds: {
    values: [
      { name: 'light', value: '#fff' },
      { name: 'dark', value: '#333' },
    ],
  },
	docs: {
		description: {
      story : 'Example with full html tags in text and no icon.',
    }
	},
}
