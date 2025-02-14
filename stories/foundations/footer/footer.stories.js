import TwigFooter from './footer.local.twig'
import TwigFooter2 from './footer2.local.twig'
import TwigFooter3 from './footer3.local.twig'
import FooterDocs from '!!raw-loader!./footer.docs.mdx'


export default {
	title: 'Foundations/Footer',
	parameters: {
		componentSubtitle: 'HTML footer',
		docs: {
			description: {
			  component: FooterDocs,
			},
		  },
	},
}

export const Example = (args) => TwigFooter(args);
export const Example2 = (args) => TwigFooter2(args);
export const Example3 = (args) => TwigFooter3(args);
