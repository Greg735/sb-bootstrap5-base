
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
    carousel_id: { control: 'text', defaultValue: 'carouselExample' },
    classes: { control: 'text', defaultValue: '' },
    items: {
      control: 'object',
      defaultValue: [
        {
          image: 'https://picsum.photos/id/555/800/600',
          alt: 'First slide',
          caption: 'First Slide Label',
          subcaption: 'Some representative placeholder content for the first slide.'
        },
        {
          image: 'https://picsum.photos/id/554/800/600',
          alt: 'Second slide',
          caption: 'Second Slide Label',
          subcaption: 'Some representative placeholder content for the second slide.'
        },
        {
          image: 'https://picsum.photos/id/553/800/600',
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
  carousel_id: 'carouselExample',
  classes: '',
  items: [
    {
      image: 'https://picsum.photos/id/555/800/600',
      alt: 'First slide',
      caption: 'First Slide Label',
      subcaption: 'Some representative placeholder content for the first slide.'
    },
    {
      image: 'https://picsum.photos/id/554/800/600',
      alt: 'Second slide',
      caption: 'Second Slide Label',
      subcaption: 'Some representative placeholder content for the second slide.'
    },
    {
      image: 'https://picsum.photos/id/553/800/600',
      alt: 'Third slide',
    }
  ]
};