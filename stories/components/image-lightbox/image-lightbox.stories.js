
// import './_alert.scss';
import ImageLightboxTemplate from './image-lightbox.twig';
import ImageLightboxDocs from '!!raw-loader!./image-lightbox.docs.mdx';
import ImageLightboxSource from '!!raw-loader!./image-lightbox.twig';
import GLightbox from 'glightbox';

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
  },
};

const Template = (args) => ImageLightboxTemplate(args);

export const Default = Template.bind({});
Default.args = {
  alt: 'Image alternative text',
  src: 'https://picsum.photos/id/666/400/400',
  width: 400,
  height: 400,
  lightbox_dest_image_src: 'https://picsum.photos/id/555/1920/1080',
  lightbox_caption: 'Title: Image title',
  lightbox_gallery: '',
};

