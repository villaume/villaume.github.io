require("dotenv").config()

module.exports = {
  pathPrefix: "/villaume.github.io",
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // In your gatsby-config.js
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-4Z3S54YKTJ`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
    resolve: "gatsby-plugin-firebase",
    options: {
       features: {
         auth: false,
         database: false,
         firestore: false,
         storage: false,
         messaging: false,
         functions: false,
         performance: false,
         analytics:true,
       },
       credentials: {
         apiKey: 'AIzaSyCNXsqyCpuyLnXne2pJDA-1eMi0YjZltNI',
         authDomain: "tracking-sandbox-684bf.firebaseapp.com",
         databaseURL: "https://tracking-sandbox-684bf.firebaseio.com",
         projectId: "tracking-sandbox-684bf",
         storageBucket: "tracking-sandbox-684bf.appspot.com",
         messagingSenderId: "252979739625",
         appId: "1:252979739625:web:5d34a03ab609583f6d6978",
         measurementId: "G-Z8YKV2R4VT"
       }
      },
     },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
