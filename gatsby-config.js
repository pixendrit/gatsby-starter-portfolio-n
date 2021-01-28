require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Nesa-Media`,
    siteTitleAlt: `Nesa Media`,
    siteHeadline: `Shërbime Digjitale`,
    siteUrl: `https://nesa.media`,
    siteDescription: `Zhvillim & Kreativitet`,
    siteLanguage: `en`,
    siteImage: `/banner2.jpg`,
    author: `@pixendrit`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nesa-Media`,
        short_name: `NesaMedia`,
        description: `Zhvillim & Kreativitet`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#e63946`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
