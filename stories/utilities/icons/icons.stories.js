import TwigIcons from './icons.local.twig'
import IconsDocs from '!!raw-loader!./icons.docs.mdx'

export default {
	title: 'Utilities/Icons',
	parameters: {
		componentSubtitle: '',
		docs: {
			description: {
				component: IconsDocs,
			},
		},
		controls: { disable: true },
	},
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		name: [
			'text-paragraph',
		],
	},
}

const Template = ({ name }) => TwigIcons({ name })

export const ParagraphIcon = Template.bind({})

export const BootstrapIcon = Template.bind({})
BootstrapIcon.args = {
	name: [
        'bootstrap'
	],
}

