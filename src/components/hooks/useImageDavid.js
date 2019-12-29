import { useStaticQuery, graphql } from "gatsby"

export const useImageDavid = () => {
  const image = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "images/david.jpg"}) {
      childImageSharp {
        fluid(maxWidth:200) {
          base64
          aspectRatio
          src
          srcSet
        }
      }
    }
  }
`)
  return image.file.childImageSharp.fluid
}