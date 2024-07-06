
// import './_alert.scss';
import ImageZoomTemplate from './image-zoom.twig';
import ImageZoomDocs from '!!raw-loader!./image-zoom.docs.mdx';
import ImageZoomSource from '!!raw-loader!./image-zoom.twig';


export default {
  title: 'Components/Image/Image Zoom',
	parameters: {
		componentSubtitle:
     '',
    componentSource: {
      code: ImageZoomSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: ImageZoomDocs,
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
        defaultValue: { summary: 1920 },
      }
    },
    height: { 
      control: 'number', 
      type: {
        required: false,
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1080 },
      }
    },
    classes: {
			control: 'array',
			description: 'Array of classes',
			table: {
				type: { summary: 'array' },
			},
		},
  },
};

const Template = (args) => ImageZoomTemplate(args);

export const Default = Template.bind({});
Default.args = {
  title: 'Image title',
  alt: 'Image alternative text',
  src: 'https://picsum.photos/id/391/1920/1080',
  width: 1920,
  height: 1080,
  classes: ['rounded'],
};

