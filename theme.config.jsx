/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  logo: (
    <span className="font-bold text-lg">
      Zure UI
    </span>
  ),

  project: {
    link: 'https://github.com/your-username/zure-ui',
  },

  docsRepositoryBase:
    'https://github.com/your-username/zure-ui/tree/main',

  titleSuffix: ' – Zure UI',

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Zure UI – Modern React UI Components" />
      <meta name="og:title" content="Zure UI Docs" />
    </>
  ),

  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Zure UI. All rights reserved.
      </span>
    ),
  },

  search: {
    placeholder: 'Search components...',
  },

  toc: {
    float: true,        // ✅ Right side floating TOC
    title: 'On this page',
  },

  navigation: {
    prev: true,
    next: true,
  },

  editLink: {
    text: 'Edit this page on GitHub',
  },

  feedback: {
    content: 'Question? Give us feedback →',
  },

  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
  },
}

export default config
