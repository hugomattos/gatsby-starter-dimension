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
    footerText: "CTM ADVOGADOS",
    defaultTitle: "CTM Advogados",
    defaultDescription: "A CTM Advogados é um escritório composto por 4 Advogados, com sólida formação académica em Direito, que se norteiam por valores de ética, lealdade, independência, rigor, transparência e deontologia ao serviço da comunidade. O sigilo profissional e a confidencialidade são valores absolutos.",
    siteUrl: "https://www.ctm-advogados.pt",
    defaultImage: "/images/logo.png",
    image: "/images/logo.png"

  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CTM Advogados',
        short_name: 'CTM',
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
