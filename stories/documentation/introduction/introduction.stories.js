import IntroTemplate from './introduction.local.twig'

const count = (modules) => Object.keys(modules).length;

export default {
  title: 'Documentation/Introduction',
  // Standalone page: no autodocs, and the single story is hoisted in the
  // sidebar because its name matches the component name.
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
}

export const Introduction = {
  name: 'Introduction',
  render: (args) => IntroTemplate(args),
  args: {
    stats: [
      { label: 'Components', value: count(import.meta.glob('../../components/**/*.stories.js')) },
      { label: 'Foundations', value: count(import.meta.glob('../../foundations/**/*.stories.js')) },
      { label: 'Utilities', value: count(import.meta.glob('../../utilities/**/*.stories.js')) },
      { label: 'Bootstrap', value: '5' },
    ],
    sections: [
      {
        id: 'foundations-typography',
        icon: 'palette',
        title: 'Foundations',
        text: 'Colors, typography, headings and forms: the design tokens everything else is built on.',
      },
      {
        id: 'components-button-button',
        icon: 'grid-1x2',
        title: 'Components',
        text: 'Reusable Twig components with their props, variants and live examples.',
      },
      {
        id: 'utilities-icons',
        icon: 'tools',
        title: 'Utilities',
        text: 'Icons, animations, tooltips and layout helpers to enhance any component.',
      },
      {
        id: 'components-section-section',
        icon: 'layout-text-window',
        title: 'Sections',
        text: 'Page-level blocks that combine components into ready-to-use layouts.',
      },
    ],
    steps: [
      { title: 'Install dependencies', command: 'ddev npm install' },
      { title: 'Start Storybook and Gulp', command: 'ddev npm run develop' },
      { title: 'Build the static Storybook', command: 'ddev npm run build-storybook' },
    ],
    workflow: [
      {
        icon: 'filetype-html',
        title: 'Twig templates',
        text: 'Each component lives in <code>stories/components/</code> with its <code>.twig</code>, <code>.scss</code> and story.',
      },
      {
        icon: 'filetype-scss',
        title: 'Sass + Gulp',
        text: 'Gulp compiles Sass and JavaScript into <code>public/</code> and <code>dist/</code>; Storybook reloads automatically.',
      },
      {
        icon: 'box-seam',
        title: 'Drupal ready',
        text: 'Templates from <code>dist/components/</code> can be used directly in the Drupal theme.',
      },
    ],
  },
}
