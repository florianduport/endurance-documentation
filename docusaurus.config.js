// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Endurance Framework',
  tagline: 'Easy module-based framework for building NodeJS web APIs',
  favicon: 'img/space-station-white.ico',

  // Set the production url of your site here
  url: 'https://endurancejs.com.main-bvxea6i-xcuf3652hubp4.fr-4.platformsh.site/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Programisto Labs', // Usually your GitHub org/user name.
  projectName: 'endurance', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/florianduport/endurance/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/florianduport/endurance/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Endurance',
        logo: {
          alt: 'Endurance Logo',
          src: 'img/space-station-white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/florianduport/endurance',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/intro',
              },
              {
                label: 'CLI Reference',
                to: '/docs/cli-reference',
              },
              {
                label: 'Tutorial - Basics',
                to: '/docs/category/tutorial---basics',
              },
              {
                label: 'Tutorial - Extras',
                to: '/docs/category/tutorial---extras',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/florianduport/endurance',
              },
            ],
          },
          {
            title: 'Sponsors',
            items: [
              {
                label: 'Programisto',
                href: 'https://programisto.fr',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Endurance, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
