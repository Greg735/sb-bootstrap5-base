
// import './_alert.scss';
import ImagesGalleryTemplate from './images-gallery.twig';
import ImagesGalleryDocs from '!!raw-loader!./images-gallery.docs.mdx';
import ImagesGallerySource from '!!raw-loader!./images-gallery.twig';

export default {
  title: 'Components/Images Gallery',
	parameters: {
		componentSubtitle:
     '',
    componentSource: {
      code: ImagesGallerySource,
      language: 'twig',
    },
    docs: {
      description: {
        component: ImagesGalleryDocs,
      },
    },
	},
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
    gallery_classes: {
			control: 'array',
			description: 'Array of classes',
			table: {
				type: { summary: 'array' },
			},
		},
    use_lightbox: {
      control: 'boolean',
      description: 'Use lightbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    gallery_spacing: { 
      control: 'number', 
      type: {
        required: false,
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      }
    },
    gallery_grid: { 
      control: 'text', 
      type: {
        required: true,
      }
    },
    items: {
      control: 'object',
      description: 'Array of image items',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

const Template = (args) => ImagesGalleryTemplate(args);

export const Default = Template.bind({});
Default.args = {
  gallery_classes: null,
  use_lightbox: false,
  gallery_spacing: 2,
  gallery_grid: 'col-6 col-sm-4 col-md-3',
  gallery_attributes: {
     'data-masonry' : "{'percentPosition': true }" 
  },
  items: [
    {   
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/1/800/600',
      width: 800,
      height: 600,
      lightbox_dest_image_src: 'https://picsum.photos/id/1/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',

    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/2/800/600',
      width: 800,
      height: 600,
      lightbox_dest_image_src: 'https://picsum.photos/id/2/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '', 
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/3/800/600',
      width: 800,
      height: 600,
      lightbox_dest_image_src: 'https://picsum.photos/id/3/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/4/800/600',
      width: 800,
      height: 600,
      lightbox_dest_image_src: 'https://picsum.photos/id/4/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/5/800/600',
      width: 800,
      height: 600,
      lightbox_dest_image_src: 'https://picsum.photos/id/5/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/6/800/600',
      width: 800,
      height: 600,
      lightbox_dest_image_src: 'https://picsum.photos/id/6/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/7/800/600',
      width: 800,
      height: 600,
      lightbox_dest_image_src: 'https://picsum.photos/id/7/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/8/800/600',
      width: 800,
      height: 600,
      lightbox_dest_image_src: 'https://picsum.photos/id/8/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
  ],

};

export const WithLightbox = Template.bind({});
WithLightbox.args = {
  ...Default.args,
  use_lightbox: true,
};

export const WithAnimations = Template.bind({});
WithAnimations.args = {
  ...Default.args,
  use_lightbox: true,
  items: [
    {   
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/1/800/600',
      width: 800,
      height: 600,
      image_attributes: { 'data-cue': "fadeIn", 'data-duration': "1200"},
      lightbox_dest_image_src: 'https://picsum.photos/id/1/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',

    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/2/800/600',
      width: 800,
      height: 600,
      image_attributes: { 'data-cue': "fadeIn", 'data-duration': "1200"},
      lightbox_dest_image_src: 'https://picsum.photos/id/2/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '', 
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/3/800/600',
      width: 800,
      height: 600,
      image_attributes: { 'data-cue': "fadeIn", 'data-duration': "1200"},
      lightbox_dest_image_src: 'https://picsum.photos/id/3/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/4/800/600',
      width: 800,
      height: 600,
      image_attributes: { 'data-cue': "fadeIn", 'data-duration': "1200"},
      lightbox_dest_image_src: 'https://picsum.photos/id/4/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/5/800/600',
      width: 800,
      height: 600,
      image_attributes: { 'data-cue': "fadeIn", 'data-duration': "1200"},
      lightbox_dest_image_src: 'https://picsum.photos/id/5/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/6/800/600',
      width: 800,
      height: 600,
      image_attributes: { 'data-cue': "fadeIn", 'data-duration': "1200"},
      lightbox_dest_image_src: 'https://picsum.photos/id/6/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/7/800/600',
      width: 800,
      height: 600,
      image_attributes: { 'data-cue': "fadeIn", 'data-duration': "1200"},
      lightbox_dest_image_src: 'https://picsum.photos/id/7/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
    { 
      alt: 'Image alternative text',
      src: 'https://picsum.photos/id/8/800/600',
      width: 800,
      height: 600,
      image_attributes: { 'data-cue': "fadeIn", 'data-duration': "1200"},
      lightbox_dest_image_src: 'https://picsum.photos/id/8/1920/1080',
      lightbox_caption: 'Title: Image title',
      lightbox_gallery: '',
    },
  ],
};
