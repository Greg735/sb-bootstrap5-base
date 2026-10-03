import YoutubeTemplate from './youtube.twig';
import YoutubeDocs from './youtube.docs.md?raw';
import YoutubeSource from './youtube.twig?raw';

export default {
  title: 'Components/Youtube',
  parameters: {
    componentSubtitle: '',
    componentSource: {
      code: YoutubeSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: YoutubeDocs,
      },
    },
  },
  args: {},
  argTypes: {
    title: {
      name: 'Video title',
      description: 'The video title',
      control: {
        type: 'text',
      },
    },
    video_id: {
      name: 'Video title',
      description: 'The video ID',
      control: {
        type: 'text',
      },
    },
    classes: {
      control: 'array',
      description: 'Array of classes',
      table: {
        type: {summary: 'array'},
      },
    },
  },
};

const Template = (args) => YoutubeTemplate(args);

export const Default = Template.bind({});

Default.args = {
  title: 'Youtube video example',
  video_id: 'CLwX9EWlWJM',
  classes: ['']
};


export const Example1 = Template.bind({});
Example1.args = {
  ...Default.args,
  classes: ['border', 'rounded-4', 'overflow-hidden', 'shadow-lg'],
};

Example1.parameters = {
  docs: {
    description: {
      story: 'Example of a rounded (4) youtube video with big shadow.',
    }
  },
}
