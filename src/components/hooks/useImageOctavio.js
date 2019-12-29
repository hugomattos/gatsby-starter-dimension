import { useStaticQuery, graphql } from "gatsby"

export const useImageOctavio = () => {
  const image = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "images/octavio_resized.jpg"}) {
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