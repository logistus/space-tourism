/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Space Tourism`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-layout", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Barlow`,
            file: `https://fonts.googleapis.com/css2?family=Barlow&display=swap`,
          },
          {
            name: `Barlow Condensed`,
            file: `https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap`,
          },
          {
            name: `Bellefair`,
            file: `https://fonts.googleapis.com/css2?family=Bellefair&display=swap`,
          },
        ],
      },
    }]
};