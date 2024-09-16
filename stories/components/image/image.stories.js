
// import './_alert.scss';
import ImageTemplate from './image.twig';
import ImageDocs from '!!raw-loader!./image.docs.mdx';
import ImageSource from '!!raw-loader!./image.twig';


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
    width: { 
      control: 'number', 
      type: {
        required: false,
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 640 },
      }
    },
    height: { 
      control: 'number', 
      type: {
        required: false,
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 480 },
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
     },
     image_classes: {
      control: 'array',
      description: 'Array of classes',
      table: {
        type: { summary: 'array' },
      },
		},
  },
};

const Template = (args) => ImageTemplate(args);


export const Default = Template.bind({});
Default.args = {
  title: 'Image title',
  alt: 'Image alternative text',
  src: 'https://picsum.photos/id/32/640/480',
  shadow: false,
  thumbnail: false,
  rounded: false,
  width: 640,
  height: 480,
  image_classes: [''],
};

