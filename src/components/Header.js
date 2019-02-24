import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-suitcase"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>CTM Advogados</h1>
                <p>A CTM é uma sociedade de advogados sediada em Rio Tinto, Gondomar<br /></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Trabalhos</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Sobre</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contactos</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
