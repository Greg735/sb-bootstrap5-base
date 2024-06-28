// import './_section.scss';

import sectionPFTemplate from './section-prefooter.html.twig';
import sectionPFDocs from '!!raw-loader!./section-prefooter.docs.mdx';
import sectionPFSource from '!!raw-loader!./section-prefooter.html.twig';


export default {
  title: 'Components/Section/Section pre-Footer',
	parameters: {
		componentSubtitle:
     'This is the pre-footer section.',
    componentSource: {
      code: sectionPFSource,
      language: 'twig',
    },
    docs: {
      // description: {
      //   component: sectionPFDocs,
      // },
    },
	},
  args: {
  },
  argTypes: {
    class: {
      control: 'text', 
      description: 'Some classes.',
      type: {
        required: false,
      }
    },
    heading: { 
      control: 'text', 
      description: 'the heading (h1, hx) component.',
      type: {
        required: false,
      }
    },
    content: { 
      control: 'text', 
      description: 'Can contains html tags.',
      type: {
        required: true,
      }
    },
  },
};

const Template = (args) => sectionPFTemplate(args);


export const Example = Template.bind({});
Example.args = {
  heading: '<h2 class="text-left">My section title</h2>',
  content: '<div class="col-md-6 align-self-center">   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  <a href="https://example.com" class="btn btn-white shadow btn-lg mt-2 mb-4" title="Primary link title" target="_self">Main link color</a>   </div>    <div class="col-md-6 align-self-center">      <img src="https://picsum.photos/seed/picsum/1920/1080" width="1920" height="1080" class="img-fluid rounded shadow" alt="Descriptive Alt Text"></div>',
};
Example.parameters = {
	// backgrounds: { default: 'dark' },
  backgrounds: {
    values: [
      { name: 'light', value: '#fff' },
      { name: 'dark', value: '#333' },
    ],
  },
	docs: {
		description: {
      story : 'Example with a background light. 2 columns and image with shadow and rounded classes.',
    }
	},
}