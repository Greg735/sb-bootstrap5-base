import TwigDisplayHeading from './display-heading.twig'
import DisplayHeadingDocs from '!!raw-loader!./display-heading.docs.mdx'
import DisplayHeadingSource from '!!raw-loader!./display-heading.twig';


export default {
	title: 'Components/Headings/Display',
	parameters: {
		componentSubtitle: 'Display headings 1-6',
		componentSource: {
			code: DisplayHeadingSource,
			language: 'twig',
		  },
		docs: {
			description: {
			  component: DisplayHeadingDocs,
			},
		  },
	},
	argTypes: {
		display_heading_level: {
			name: 'Heading level',
			description: 'Semantic heading level (h1-h6)',
			control: {
				type: 'range',
				min: 1,
				max: 6,
				step: 1,
			},
		},
		text: {
			name: 'Heading text',
			description: 'Sample text for heading',
			control: {
				type: 'text',
			},
		},
		display_heading_classes: {
			control: 'array',
			description: 'Array of classes',
			table: {
				type: { summary: 'array' },
			},
		},
	},
	args: { display_heading_level: 1, text: 'Sample display text', heading_classes: ['text-center', 'text-uppercase'] },
}

const Template = (args) => TwigDisplayHeading(args);

export const Default = Template.bind({});
Default.args = {
	display_heading_level : 2
}