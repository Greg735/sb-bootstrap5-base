import TwigForms from './forms.local.twig'
import FormsDocs from '!!raw-loader!./forms.docs.mdx'

export default {
	title: 'Foundations/Forms',
	parameters: {
		docs: {
			description: {
				component: FormsDocs,
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
	},
}

export const FormsExample = (args) => TwigForms(args);
