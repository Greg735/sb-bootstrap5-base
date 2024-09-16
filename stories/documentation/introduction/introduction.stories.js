import IntroTemplate from './introduction.local.twig'

import IntroductionDocs from '!!raw-loader!./introduction.docs.mdx'

export default {
	title: 'Documentation/Introduction',
	parameters: {
		docs: {
			description: {
				component: IntroductionDocs,
			},
		},
	},
}

export const Template = (args) => IntroTemplate(args);
