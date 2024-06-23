// import './_section.scss';

import sectionTemplate from './section.html.twig';
import sectionDocs from '!!raw-loader!./section.docs.mdx';
import sectionSource from '!!raw-loader!./section.html.twig';


export default {
  title: 'Components/Section',
	parameters: {
		componentSubtitle:
     'Section is just a <section> with some parameters for design (class and background). Title is optional (h2 element) and the content is to be define.',
    componentSource: {
      code: sectionSource,
      language: 'twig',
    },
    docs: {
      // description: {
      //   component: sectionDocs,
      // },
    },
	},
  tags: ['autodocs'],
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
    title: { 
      control: 'text', 
      description: 'My section title (h2).',
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

const Template = (args) => sectionTemplate(args);


export const Example = Template.bind({});
Example.args = {
  class: "position-relative p-5 bg-secondary text-bg-primary bg-gradient",
  title: 'My section title!',
  content: '<div class="row">    <div class="col-md-6 align-self-center">   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>    </div>    <div class="col-md-6">      <img src="https://picsum.photos/seed/picsum/600/400" class="img-fluid rounded shadow" alt="Descriptive Alt Text">    </div>  </div>',
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