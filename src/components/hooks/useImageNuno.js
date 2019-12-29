import { useStaticQuery, graphql } from "gatsby"

export const useImageNuno = () => {
  const image = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "images/nuno.jpg"}) {
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