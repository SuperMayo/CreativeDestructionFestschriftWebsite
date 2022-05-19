module.exports = {
    siteMetadata: {
        title: `The Economics of Creative Destruction`,
        description: `To honor the 30th anniversary of Aghion and Howitt 'A Model of Growth through Creative Destruction', Ufuk Akcigit and John Van Reenen organized a four-day zoom seminar, followed-up by a book edited at Harvard University Press.
        More than a hundred renowned economists have been meeting from June 9 to June 12 to present and exchange ideas about how the creative destruction framework offers a fresh lens on their discipline.`,
        author: `Antoine Mayerowitz a.mayerowitz@gmail.com`
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-yaml`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `data`,
              path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images/`,
          },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `The Economics of Creative Destruction`,
              short_name: `Creative Destruction`,
              start_url: `/`,
              background_color: `#fff`,
              theme_color: `#0a519d`,
              display: `standalone`,
              icon: `src/images/icon.png`
            },
        },
        {
            resolve: `gatsby-plugin-goatcounter`,
            options: {
              code: 'creativedestruction',
              pageTransitionDelay: 0,
              head: false,
              pixel: true,
              allowLocal: false,
              referrer: true,
              urlCleanup: false,
            },
          },
    ]
}