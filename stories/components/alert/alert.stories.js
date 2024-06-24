
// import './_alert.scss';
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
      options: ['success', 'danger', 'warning', 'info'],
      table: {
        require: "true",
        type: { summary: 'string' },
        defaultValue: { summary: "info" },
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


export const Info = Template.bind({});
Info.args = {
  text: 'This is an important text for the user to read.',
  type: 'info',
  dismissible: false,
  hide_icon: false,
};


export const Success = Template.bind({});
Success.args = {
  ...Info.args,
  type: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Info.args,
  type: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  ...Info.args,
  type: 'warning',
};


export const InfoDismissible = Template.bind({});
InfoDismissible.args = {
  ...Info.args,
  dismissible: true,
};

export const SuccessBigMessage = Template.bind({});
SuccessBigMessage.args = {
  ...Info.args,
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
