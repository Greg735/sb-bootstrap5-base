
import ImageLightboxTemplate from './image-lightbox.twig';
import ImageLightboxDocs from '!!raw-loader!./image-lightbox.docs.mdx';
import ImageLightboxSource from '!!raw-loader!./image-lightbox.twig';

export default {
  title: 'Components/Image/Image Lightbox',
	parameters: {
		componentSubtitle:
     '',
    componentSource: {
      code: ImageLightboxSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: ImageLightboxDocs,
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
    image_classes: {
      control: 'array',
      description: 'Array of classes',
      table: {
        type: { summary: 'array' },
      },
    },
    lightbox_dest_image_src: { 
      control: 'text', 
      type: {
        required: true,
      }
    },
    lightbox_caption: { 
      control: 'text', 
      type: {
        required: true,
      }
    },
    lightbox_gallery: { 
      control: 'text',
    },
    lightbox_classes: {
      control: 'array',
      description: 'Array of classes',
      table: {
        type: { summary: 'array' },
      },
    },
  },
};

const Template = (args) => ImageLightboxTemplate(args);

export const Default = Template.bind({});
Default.args = {
  alt: 'Image alternative text',
  src: 'https://picsum.photos/id/666/400/400',
  width: 400,
  height: 400,
  image_classes: [''],
  lightbox_dest_image_src: 'https://picsum.photos/id/555/1920/1080',
  lightbox_caption: 'Title: Image title',
  lightbox_gallery: '',
  lightbox_classes: ['mb-5']
};

