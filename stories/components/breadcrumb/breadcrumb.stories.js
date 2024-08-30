
import BreadcrumbTemplate from './breadcrumb.twig';
import BreadcrumbDocs from '!!raw-loader!./breadcrumb.docs.mdx';
import BreadcrumbSource from '!!raw-loader!./breadcrumb.twig';
import {constants} from '../_constants';

export default {
  title: 'Components/Breadcrumb',
	parameters: {
		componentSubtitle: '',
    componentSource: {
      code: BreadcrumbSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: BreadcrumbDocs,
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
      defaultValue: "", 
      options: constants.icons_home.options,
      description: '**Options**',
      table: {
        require: "false",
        type: { 
          summary: constants.icons_home.options.map(option => `'${option}'`).join('|')
        },
        defaultValue: { 
          summary: "" 
        },
      },
    },
    breadcrumb: {
      control: 'object',
      description: 'Array of breadcrumb items with text and optional URL',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

const Template = (args) => BreadcrumbTemplate(args);

export const Default = Template.bind({});
Default.args = {
  breadcrumb: [
    { text: 'Home', url: '/' },
    { text: 'Library', url: '/library' },
    { text: 'Data', url: '/library/data' },
    { text: 'Current Page' },
  ],
};
Default.parameters = {
	docs: {
		description: {
      story : 'Displays a breadcrumb with multiple items, some with links and some without.',
    }
	},
}

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
  ...Default.args,
  icon_name: 'house-door',
};
DefaultWithIcon.parameters = {
	docs: {
		description: {
      story : 'Displays a breadcrumb with multiple items, some with links, some without and an icon before.',
    }
	},
}
  
export const SingleItem = Template.bind({});
SingleItem.args = {
  breadcrumb: [
    { text: 'Home', url: '/' },
  ],
};
SingleItem.parameters = {
	docs: {
		description: {
      story : 'Displays a breadcrumb with a single item.',
    }
	},
}

export const WithoutLinks = Template.bind({});
WithoutLinks.args = {
  breadcrumb: [
    { text: 'Home' },
    { text: 'Library' },
    { text: 'Data' },
    { text: 'Current Page' },
  ],
};
WithoutLinks.parameters = {
	docs: {
		description: {
            story : 'Displays a breadcrumb with multiple items, none of which are links.',
        }
	},
}