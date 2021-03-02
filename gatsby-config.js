module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/data/articles`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "600", "700"],
            },
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        filetypes: {
          ".scss": { syntax: `postcss-scss` },
        },

        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
        // For all the options check babel-plugin-react-css-modules README link provided above
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
