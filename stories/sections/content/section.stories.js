
import './section.scss';
import sectionTemplate from './section.html.twig';
import sectionDocs from '!!raw-loader!./section.docs.mdx';
import sectionSource from '!!raw-loader!./section.html.twig';


export default {
  title: 'Sections/Content',
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


export const Default = Template.bind({});
Default.args = {
  class: "p-5 bg-light text-bg-light",
  title: 'My section title!',
  content: '<p>My content</p>',
};
