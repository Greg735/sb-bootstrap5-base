
import AccordionTemplate from './accordion.twig';
import AccordionDocs from '!!raw-loader!./accordion.docs.mdx';
import AccordionSource from '!!raw-loader!./accordion.twig';

export default {
  title: 'Components/Accordion',
	parameters: {
		componentSubtitle: '',
    componentSource: {
      code: AccordionSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: AccordionDocs,
      },
    },
	},
  args: {
  },
  argTypes: {
    accordion_id: { control: 'text' },
    items: {
      control: 'object',
      description: 'Array of accordion items with title, content, and optional open state',
      table: {
        type: { summary: 'object' },
      },
    },
    independent: {
      control: 'boolean',
      description: 'Allow accordions to be opened independently',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = (args) => AccordionTemplate(args);

export const Default = Template.bind({});
Default.args = {
  accordion_id: 'default',
  items: [
    { title: 'Accordion Item #1', content: 'This is the content of the first accordion item.', open: false },
    { title: 'Accordion Item #2', content: 'This is the content of the second accordion item.', open: false },
    { title: 'Accordion Item #3', content: 'This is the content of the third accordion item.', open: false },
  ],
  independent: true,
};
  
export const SingleItem = Template.bind({});
SingleItem.args = {
  accordion_id: 'single',
  items: [
    { title: 'Accordion Item #1', content: 'This is the content of the single accordion item.', open: true },
  ],
  independent: false,
};
// SingleItem.parameters = {
// 	docs: {
// 		description: {
//       story : 'Displays a breadcrumb with a single item.',
//     }
// 	},
// }

export const Independent = Template.bind({});
Independent.args = {
  accordion_id: 'independent',
  items: [
    { title: 'Accordion Item #1', content: 'This is the content of the first accordion item.', open: false },
    { title: 'Accordion Item #2', content: 'This is the content of the second accordion item.', open: false },
    { title: 'Accordion Item #3', content: 'This is the content of the third accordion item.', open: false },
  ],
  independent: true,
};

export const AllClosed = Template.bind({});
AllClosed.args = {
  accordion_id: 'allclosed',
  items: [
    { title: 'Accordion Item #1', content: 'This is the content of the first accordion item.', open: false },
    { title: 'Accordion Item #2', content: 'This is the content of the second accordion item.', open: false },
    { title: 'Accordion Item #3', content: 'This is the content of the third accordion item.', open: false },
  ],
  independent: false,
};

export const AllOpen = Template.bind({});
AllOpen.args = {
  accordion_id: 'allopen',
  items: [
    { title: 'Accordion Item #1', content: 'This is the content of the first accordion item.', open: true },
    { title: 'Accordion Item #2', content: 'This is the content of the second accordion item.', open: true },
    { title: 'Accordion Item #3', content: 'This is the content of the third accordion item.', open: true },
  ],
  independent: true,
};

export const MixedState = Template.bind({});
MixedState.args = {
  accordion_id: 'mixed',
  items: [
    { title: 'Accordion Item #1', content: 'This is the content of the first accordion item.', open: true },
    { title: 'Accordion Item #2', content: 'This is the content of the second accordion item.', open: false },
    { title: 'Accordion Item #3', content: 'This is the content of the third accordion item.', open: true },
  ],
  independent: false,
};
