
// import './_alert.scss';
import IconFeaturedTemplate from './icon-featured.twig';
import IconFeaturedDocs from '!!raw-loader!./icon-featured.docs.mdx';
import IconFeaturedSource from '!!raw-loader!./icon-featured.twig';
import {constants} from '../_constants';


export default {
  title: 'Components/Icon Featured',
	parameters: {
		componentSubtitle: 'An element used to display an icon inside a div with background.',
    componentSource: {
      code: IconFeaturedSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: IconFeaturedDocs,
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
    color_theme: {
      control: { type: 'select'}, 
      options: constants.colors.theme.options,
      description: '**options**',
      table: {
        type: { 
          summary: constants.colors.theme.options.map(option => `'${option}'`).join('|')
        },
        defaultValue: { summary: "primary" },
      },    
    },
    icon_featured_classes: {
			control: 'array',
			description: 'Array of classes',
			table: {
				type: { summary: 'array' },
			},
		},
    icon_size_name: {
			description: 'Size of the icon',
			table: { defaultValue: { summary: 'medium' } },
			control: {
				type: 'select',
			},
      options: ['small', 'medium', 'large', 'x-large'],
		},
    icon_featured_size: {
			description: 'Size of the icon block',
			table: { defaultValue: { summary: 'md' } },
			control: {
				type: 'select',
			},
      options: ['sm', 'md', 'lg'],
		},
  },
  args: {
		icon_name: 'bootstrap',
		icon_size_name: 'medium',
    icon_featured_size: 'md',
    icon_featured_classes: [''],
    color_theme: 'primary',
	},
};


const Template = ({ icon_name, color_theme, icon_size_name, icon_featured_size, icon_featured_classes }) =>
	IconFeaturedTemplate({ icon_name, color_theme, icon_size_name, icon_featured_size, icon_featured_classes })

export const Icon = Template.bind({})

export const HoverAnimation = Template.bind({});
HoverAnimation.args = {
  ...Icon.args,
  icon_featured_classes: ['icon-featured-hover']
};

export const Exemple1 = Template.bind({});
Exemple1.args = {
  ...Icon.args,
  icon_name: 'facebook',
  color_theme: 'white',
  icon_featured_classes: ['border', 'text-blue']
};