import TwigHeadings from './headings.local.twig'
import HeadingsDocs from '!!raw-loader!./headings.docs.mdx'


export default {
	title: 'Foundations/Headings',
	parameters: {
		componentSubtitle: 'HTML heading elements (h1-h6)',
		docs: {
			description: {
			  component: HeadingsDocs,
			},
		  },
	},
}

export const Example = (args) => TwigHeadings(args);
