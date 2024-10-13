import TwigBlockquote from './blockquote.twig'
import BlockquoteDocs from '!!raw-loader!./blockquote.docs.mdx'
import BlockquoteSource from '!!raw-loader!./blockquote.twig';


export default {
	title: 'Components/Blockquote',
	parameters: {
		componentSource: {
			code: BlockquoteSource,
			language: 'twig',
		  },
		docs: {
			description: {
			  component: BlockquoteDocs,
			},
		  },
	},
	argTypes: {
		blockquote_content: {
			name: 'blockquote_content',
			description: 'Simple html text from wysiwyg editor',
			control: {
				type: 'text',
			},
			type: {
				required: true,
			}
		},
		blockquote_footer: {
			name: 'blockquote_footer',
			description: 'Text for footer',
			control: {
				type: 'text',
			},
		},
		blockquote_classes: {
			control: 'array',
			description: 'Array of classes',
			table: {
				type: { summary: 'array' },
			},
		},
	},
	args: { 
		blockquote_content: '<p>Nullam at felis ac lacus hendrerit ultricies.</p>',
		blockquote_footer: 'Someone famous in <cite title="Source Title">Source Title</cite>',
		blockquote_classes: [''],
	},
}

const Template = (args) => TwigBlockquote(args);

export const Default = Template.bind({});

export const Quotted = Template.bind({});
Quotted.args = {
	blockquote_content: '<p>Nullam at felis ac lacus hendrerit ultricies.</p>',
	blockquote_footer: '',
	blockquote_classes: ['blockquote--quotted'],
};