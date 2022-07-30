import Play from '@geist-ui/icons/play'

const nextraThemeConfig = {
  projectLink: 'https://github.com/shuding/nextra', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', // base URL for the docs repository
  titleSuffix: ' - gettingstarted.tech',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Nerios Lamaj.`,
  footerEditLink: `Edit this page on GitHub`,
  projectLinkIcon: <Play />,
  logo: (
    <>
      <svg>...</svg>
      <span>Next.js Static Site Generator</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
  unstable_faviconGlyph: '🚀',
}

export default nextraThemeConfig;