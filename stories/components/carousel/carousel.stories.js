
import carouselTwig from './carousel.twig';
import CarouselDocs from '!!raw-loader!./carousel.docs.mdx';
import CarouselSource from '!!raw-loader!./carousel.twig';


export default {
  title: 'Components/Carousel',
  parameters: {
    componentSubtitle:
        '',
    componentSource: {
      code: CarouselSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: CarouselDocs,
      },
    },
  },
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
    indicators: { control: 'boolean', defaultValue: true },
    controls: { control: 'boolean', defaultValue: true },
    autoplay: { control: 'boolean', defaultValue: true },
    carousel_height: { control: 'number', defaultValue: null },
    carousel_id: { control: 'text', defaultValue: 'carouselExample' },
    carousel_classes: { control: 'array',
      description: 'Array of classes',
      table: {
        type: { summary: 'array' },
      },
    },
    items: {
      control: 'object',
      defaultValue: [
        {
          src: 'https://picsum.photos/id/555/800/600',
          alt: 'First slide',
          html_content: '<h1 class="mt-5">First Slide</h1>'
        },
        {
          src: 'https://picsum.photos/id/554/800/600',
          alt: 'Second slide',
          caption: 'Second Slide Label',
          subcaption: 'Some representative placeholder content for the second slide.'
        },
        {
          src: 'https://picsum.photos/id/553/800/600',
          alt: 'Third slide',
          caption: 'Third Slide Label',
          subcaption: 'Some representative placeholder content for the third slide.'
        }
      ]
    }
  },
};

const Template = (args) => carouselTwig(args);

export const Default = Template.bind({});
Default.args = {
  indicators: true,
  controls: true,
  autoplay: true,
  carousel_id: 'carouselExample',
  carousel_classes: '',
  items: [
    {
      src: 'https://picsum.photos/id/555/800/600',
      alt: 'First slide',
      html_content: '<h1 class="mt-5">First Slide</h1>'
    },
    {
      src: 'https://picsum.photos/id/554/800/600',
      alt: 'Second slide',
      caption: 'Second Slide Label',
      subcaption: 'Some representative placeholder content for the second slide.'
    },
    {
      src: 'https://picsum.photos/id/553/800/600',
      alt: 'Third slide',
    }
  ]
};

export const FixedHeight = Template.bind({});
FixedHeight.args = {
  ...Default.args,
  carousel_height: 450,
  carousel_id: 'carouselExample2',
};

export const WithLightbox = Template.bind({});
WithLightbox.args = {
  ...Default.args,
  indicators: false,
  autoplay: false,
  carousel_id: 'carouselExample3',
  items: [
    {
      src: 'https://picsum.photos/id/555/800/600',
      lightbox_img: 'https://picsum.photos/id/555/3440/1440',
      alt: 'First slide',
    },
    {
      src: 'https://picsum.photos/id/554/800/600',
      lightbox_img: 'https://picsum.photos/id/554/3440/1440',
      alt: 'Second slide',
    },
    {
      src: 'https://picsum.photos/id/553/800/600',
      lightbox_img: 'https://picsum.photos/id/553/3440/1440',
      alt: 'Third slide',
    }
  ]
};