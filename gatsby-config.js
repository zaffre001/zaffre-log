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
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
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

      }
    },
    `gatsby-transformer-sharp`,
  ],
}
