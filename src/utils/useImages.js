import { useStaticQuery, graphql } from "gatsby"

export const useImageCTM = () => {
  const image = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "images/aereal.png"}) {
      childImageSharp {
        fluid(maxWidth:700) {
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