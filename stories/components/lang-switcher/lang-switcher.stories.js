import LangSwitcherTemplate from './lang-switcher.twig';
import LangSwitcherSource from '!!raw-loader!./lang-switcher.twig';
import LangSwitcherDoc from '!!raw-loader!./lang-switcher.docs.mdx';

export default {
  title: 'Components/Lang switcher',
  component: 'LangSwitcher',
  parameters: {
    componentSubtitle: 'This is the lang switcher.',
    storySource: {
      source: LangSwitcherSource,
    },
    docs: {
      description: {
        component: LangSwitcherDoc,
      },
    },
  },
  args: {},
  argTypes: {},
};

const Template = (args) => LangSwitcherTemplate(args);

export const Simple = Template.bind({});

Simple.parameters = {
  docs: {
    description: {
      story: 'Example of the languages switcher.',
    }
  },
}

Simple.args = {
  links: [
    {
      'url': "/fr",
      'is_active': false,
      'language_code': "fr",
    },
    {
      'url': "/de",
      'is_active': true,
      'language_code': "de",
    },
    {
      'url': "/en",
      'is_active': false,
      'language_code': "en",
    }
  ],
  current_lang: "de",
};

