import TwigColors from './colors.local.twig'
import ColorsDocs from '!!raw-loader!./colors.docs.mdx'

export default {
	title: 'Utilities/Colors',
	parameters: {
		componentSubtitle: 'System-wide color variables',
		docs: {
			description: {
				component: ColorsDocs,
			},
		},
		controls: { disable: true },
	},
	argTypes: {
        columns: {
            table: {
                disable: true,
            }
        },
		colors: {
			table: {
				disable: true,
			},
		},
	},
	args: {
        columns: 'col',
		colors: [
			'bs-primary',
			'bs-secondary',
		],
	},
}

const Template = ({ columns, colors }) => TwigColors({ columns, colors })

export const MainColors = Template.bind({})

export const ThemeColors = Template.bind({})
ThemeColors.args = {
    columns: 'col-md-3',
	colors: [
        'bs-blue',
        'bs-green',
        'bs-orange',
        'bs-cyan',
        'bs-red',
        'bs-light',
        'bs-dark',
        'bs-indigo',
        'bs-purple',
        'bs-pink',
        'bs-yellow',
        'bs-teal',
        'bs-black',
        'bs-white',
        'bs-gray',
        'bs-gray-dark',
	],
}


export const NeutralColors = Template.bind({})
NeutralColors.args = {
    columns: 'col-12',
	colors: [
 		'bs-black',
		'bs-white',
		'bs-gray',
		'bs-gray-dark',
		'bs-gray-100',
		'bs-gray-200',
		'bs-gray-300',
		'bs-gray-400',
		'bs-gray-500',
		'bs-gray-600',
        'bs-gray-700',
		'bs-gray-800',
		'bs-gray-900',
	],
}

export const FunctionalColors = Template.bind({})
FunctionalColors.args = {
    columns: 'col-sm-4',
	colors: [
        'bs-blue',
        'bs-indigo',
        'bs-purple',
        'bs-pink',
        'bs-red',
        'bs-orange',
        'bs-yellow',
        'bs-green',
        'bs-teal',
        'bs-cyan',
        'bs-black', 
        'bs-white',
        'bs-gray',
	],
}