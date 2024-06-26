
// import './_alert.scss';
import ImageTemplate from './image.html.twig';
import ImageDocs from '!!raw-loader!./image.docs.mdx';
import ImageSource from '!!raw-loader!./image.html.twig';


export default {
  title: 'Components/Image',
	parameters: {
		componentSubtitle:
     '',
    componentSource: {
      code: ImageSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: ImageDocs,
      },
    },
	},
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
    alt: { 
      control: 'text', 
      type: {
        required: true,
      }
    },
    title: { 
      control: 'text', 
      type: {
        required: true,
      }
    },
    src: { 
      control: 'text', 
      type: {
        required: true,
      }
    },
    shadow: { 
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    thumbnail: { 
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
     },
     rounded: { 
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
     }
  },
};

const Template = (args) => ImageTemplate(args);


export const Default = Template.bind({});
Default.args = {
  title: 'Image title',
  alt: 'Image alternative text',
  src: 'https://picsum.photos/640/480',
  shadow: false,
  thumbnail: false,
  rounded: false,
};

