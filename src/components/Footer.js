import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            footerText
          }
        }
      }
    `}
        render={data => (
            <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
                <p className="copyright">&copy; {data.site.siteMetadata.footerText}</p>
            </footer>
        )}
    />
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
