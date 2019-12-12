module.exports = {
  siteMetadata: {
    mainTitle: "CTM Advogados",
    mainDescription: "“A sabedoria dos homens é proporcional não à sua experiência mas à sua capacidade de adquirir experiência”",
    mainDescriptionAuthor: "George Bernard Shaw",
    firstLink: "CTM",
    secondLink: "Equipa",
    thirdLink: "Áreas de prática",
    fourthLink: "Consulta online",
    fifthLink: "Contactos",
    footerText: "CTM ADVOGADOS 2019"

  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
