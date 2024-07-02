// import './_section.scss';

import sectionTemplate from './section.twig';
import sectionDocs from '!!raw-loader!./section.docs.mdx';
import sectionSource from '!!raw-loader!./section.twig';


export default {
  title: 'Components/Section/Section',
	parameters: {
		componentSubtitle:
     'Section is just a <section> with some parameters for design (class and background). Title is optional (h2 element) and the content is to be define.',
    componentSource: {
      code: sectionSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: sectionDocs,
      },
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
      },
      table: {
        type: {
          summary: 'html',
        },
      }
    },
    content: { 
      control: 'text', 
      description: '',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'html',
        },
      }
    },
    background_image: {
      control: 'text', 
      description: 'add image url.',
      type: {
        required: false,
      }
    },
  },
};

const Template = (args) => sectionTemplate(args);


export const Example = Template.bind({});
Example.args = {
  class: "position-relative p-5 bg-secondary text-bg-primary bg-gradient",
  heading: '<h2 class="h1 text-left">My section title</h2>',
  content: '<div class="col-md-6">   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  <a href="https://example.com" class="btn btn-white shadow btn-lg mt-2 " title="Primary link title" target="_self">Main link color</a>   </div>    <div class="col-md-6 mt-4 mt-md-0">      <img src="https://picsum.photos/seed/picsum/1920/1080" width="1920" height="1080" class="img-fluid rounded shadow" alt="Descriptive Alt Text"></div>',
  background_image: '',
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

export const ExampleFixedBackground = Template.bind({});
ExampleFixedBackground.args = {
  ...Example.args,
  class: "section--photo section--fixed-background text-white text-center px-3 py-9",
  heading: '<h2 class="h1 text-left">Go to action</h2>',
  content: '<div class="col">    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>  <a href="https://example.com" class="btn btn-outline-white shadow btn-lg mt-2 text-center " title="Primary link title" target="_self">Main link color</a></div>',
  background_image: 'https://picsum.photos/id/94/1920/1080?grayscale&blur=4',
}

export const Example2 = Template.bind({});
Example2.args = {
  ...Example.args,
  class: "section--fade-photo p-5 text-white",
  heading: '',
  content: '<div class="col-md-6 offset-md-6">   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  <a href="https://example.com" class="btn btn-white shadow btn-lg mt-2 " title="Primary link title" target="_self">Main link color</a>   </div>',
  // background_image: 'https://picsum.photos/id/122/1920/1080',
  background_image: 'https://plus.unsplash.com/premium_photo-1674674468782-446b59dcba45',

}

export const Example3 = Template.bind({});
Example3.args = {
  ...Example.args,
  class: "section--linear-primary p-5 text-white",
}

export const Example4 = Template.bind({});
Example4.args = {
  ...Example.args,
  class: "section--with-particles bg-purple text-bg-purple p-5",
}

export const Example5 = Template.bind({});
Example5.args = {
  ...Example.args,
  class: "bg-red bg-gradient text-bg-red p-5",
  heading: '',
  content: '<div class="col-md-6">   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  <a href="https://example.com" class="btn btn-outline-white shadow btn-lg mt-2 " title="Primary link title" target="_self">Main link color</a></div>',
}

