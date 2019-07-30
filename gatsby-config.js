const path = require('path')
const siteMetadata = require('./meta')

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve('./src/pages'),
        layout: 'default'
      }
    },
    /*
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js')
        }
      }
    },
    */
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: require.resolve('./src/icons/favicon-192.png')
      }
    }
  ]
}