import { useStaticQuery, graphql } from "gatsby"

export const useImageRafael = () => {
  const image = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "images/rafael.png"}) {
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