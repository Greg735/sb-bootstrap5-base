
import PaginationTemplate from './pagination.twig';
import PaginationDocs from '!!raw-loader!./pagination.docs.mdx';
import PaginationSource from '!!raw-loader!./pagination.twig';
import {constants} from '../_constants';


export default {
  title: 'Components/Pagination',
	parameters: {
		componentSubtitle:
     '',
    componentSource: {
      code: PaginationSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: PaginationDocs,
      },
    },
	},
  args: {
  },
  argTypes: {
    pagination_title: { 
      control: 'text', 
      type: {
        required: true,
      }
    },
    size: {
      description: '**options**',
      control: { type: 'radio'},
      options: constants.sizes.options,
      table: {
          type: {
            summary: constants.sizes.options.map(option => `'${option}'`).join('|')
          }
      },
    },
    // highlight: { 
    //   control: 'boolean',
    //   table: {
    //     type: { summary: 'boolean' },
    //     defaultValue: { summary: false },
    //   }
    // },
    // type: {
    //   control: { type: 'select'},
    //   defaultValue: "primary", 
    //   options: ['success', 'danger', 'warning', 'info'],
    //   table: {
    //     require: "true",
    //     type: { summary: 'string' },
    //   },
    //   if: { 
    //     arg: 'highlight' 
    //   },
    // },
    // subtle: {
    //   control: 'boolean',
    //   table: {
    //     type: { summary: 'boolean' },
    //     defaultValue: { summary: false },
    //   },
    //   if: { 
    //     arg: 'highlight' 
    //   },
    // },
    // content: { 
    //   control: 'text', 
    //   type: {
    //     required: true,
    //   }
    // },
  },
};

const Template = (args) => PaginationTemplate(args);

export const Simple = Template.bind({});
Simple.args = {
  pagination_title: 'Search results pages',
  size: 'default',
  // highlight: false,
  // type: null,
  // subtle: false,
  // content: 'Integer risus velit, imperdiet eu gravida vel, vestibulum et eros. Donec mollis est nulla, eget tincidunt quam lobortis non. Phasellus pellentesque eget lorem in fringilla. Cras eget risus elit. Curabitur mollis eget risus eu tempus. Pellentesque id eleifend enim. Quisque facilisis molestie tellus. Suspendisse nec vehicula velit, eu pellentesque elit. Curabitur a egestas leo. Praesent sed augue tortor. In ac ex ut nibh sollicitudin faucibus non ac nibh. Quisque augue arcu, volutpat ut justo bibendum, dictum blandit purus. Nulla ornare nibh a pellentesque auctor. Suspendisse porta turpis non mauris tristique, id commodo tortor tincidunt. Vestibulum ut dui et enim lacinia condimentum.',
};
