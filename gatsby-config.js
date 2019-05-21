module.exports = {
  siteMetadata: {
    site: `Kasper Tontti`,
    title: `Kasper Tontti - Software Engineer & Designer`,
    titleTemplate: `%s`,
    description: `Pretty good at coding stuff for human beings. Love learning new every moment, getting to know good people and celebrating great ideas. Generally just living life to be inspired and to inspire.`,
    siteUrl: `https://kaspertontti.fi`,
    language: `en`,
    color: `#222222`,
    twitter: 'kaspertontti',
  },
  plugins: [
    `gatsby-plugin-glslify`,

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kasper Tontti`,
        short_name: `Kasper Tontti`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#222222`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography.ts`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
