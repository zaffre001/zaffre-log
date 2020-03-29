module.exports = {
  siteMetadata: {
    title: "zaffre log",
    author: "heejeong park",
    social: [
      {
        name: "github",
        url: "https://github.com/zaffre001",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          }],
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve:`gatsby-transformer-remark`,
      options:{
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
