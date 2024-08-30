
// import './_alert.scss';
import IconTemplate from './icon.twig';
import IconDocs from '!!raw-loader!./icon.docs.mdx';
import IconSource from '!!raw-loader!./icon.twig';
import {constants} from '../_constants';


export default {
  title: 'Components/Icon',
	parameters: {
		componentSubtitle: 'An element used to display an icon',
    componentSource: {
      code: IconSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: IconDocs,
      },
    },
	},
  args: {
  },
  argTypes: {
    icon_name : {
      control: { 
        type: 'select'
      },
      defaultValue: "vignette", 
      options: constants.icons_all.options,
      description: '**Options**',
      table: {
        require: "false",
        type: { 
          summary: constants.icons_all.options.map(option => `'${option}'`).join('|')
        },
        defaultValue: { summary: "vignette" },

      },
    },
    size: {
			description: 'Size of the icon',
			table: { defaultValue: { summary: 'medium' } },
			control: {
				type: 'select',
			},
      options: ['small', 'medium', 'large', 'x-large'],
		},
  },
  args: {
		icon_name: 'bootstrap',
		size: 'medium',
	},
};


const Template = ({ icon_name, size, cssClass }) =>
	IconTemplate({ icon_name, size, cssClass })

export const Icon = Template.bind({})

