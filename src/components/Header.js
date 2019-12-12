import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Header = (props) => (
    <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            mainTitle
            mainDescription
            mainDescriptionAuthor
            firstLink
            secondLink
            thirdLink
            fourthLink
            fifthLink
          }
        }
      }
    `}
        render={data => (
            <header id="header" style={props.timeout ? {display: 'none'} : {}}>
                <div className="logo">
                    <span className="icon fa-suitcase"></span>
                </div>
                <div className="content">
                    <div className="inner">
                        <h1>{data.site.siteMetadata.mainTitle}</h1>
                        <p className="quote" >{data.site.siteMetadata.mainDescription}</p>
                        <p>{data.site.siteMetadata.mainDescriptionAuthor}</p>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>{data.site.siteMetadata.firstLink}</a></li>
                        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>{data.site.siteMetadata.secondLink}</a></li>
                        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>{data.site.siteMetadata.thirdLink}</a></li>
                        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('appointment')}}>{data.site.siteMetadata.fourthLink}</a></li>
                        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>{data.site.siteMetadata.fifthLink}</a></li>
                    </ul>
                </nav>
            </header>
        )}
    />
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header