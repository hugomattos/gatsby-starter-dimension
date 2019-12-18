import React from 'react'
import PropTypes from 'prop-types'

import picSaul from '../images/saul.jpg'
import picAlves from '../images/rogerioalves.jpg'
import picVentura from '../images/ventura.png'
import picMarinho from '../images/marinhopinto.jpg'
import cv1 from '../attachments/Types in the Power Query M formula language.pdf'


class Team extends React.Component{
    render(){
        const close = this.props.close;
        return(
            <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Equipa</h2>
                {/*<span className="image main"><img src={pic03} alt="" /></span>*/}

                <span className="image left"><img src={picSaul} alt="" /></span>
                <p className="name"><span className="underline">Nuno Silva Matos</span></p>
                <ul className="list">
                    <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2015)</li>
                    <li>Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2018)</li>
                    <li>Línguas: Inglês</li>
                </ul>
                <ul className="icons cv">
                    <li><a href={cv1} className="icon fa-file" target="_blank"><span className="label">Curriculum Vitae</span></a>
                    <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
                </ul><br/><hr className="hr"/>

                <span className="image right"><img src={picAlves} alt="" /></span>
                <p className="nameRight"><span className="underline">Octávio Torres</span></p>
                <ul className="list">
                    <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
                    <li>Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2017)</li>
                    <li>Línguas: Inglês</li>
                </ul>
                <ul className="icons cv">
                    <li><a href={cv1} className="icon fa-file" target="_blank"><span className="label">Curriculum Vitae</span></a>
                    <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
                </ul><br/><hr className="hr"/>

                <span className="image left"><img src={picMarinho} alt="" /></span>
                <p className="name"><span className="underline">Rafael Corte Real</span></p>
                <ul className="list">
                    <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2015)</li>
                    <li>Mestrando em Direito Fiscal na Universidade Católica Portuguesa - Porto</li>
                    <li>Línguas: Inglês</li>
                </ul>
                <ul className="icons cv">
                    <li><a href={cv1} className="icon fa-file" target="_blank"><span className="label">Curriculum Vitae</span></a>
                    <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
                </ul><br/><hr className="hr"/>

                <span className="image right"><img src={picVentura} alt="" /></span>
                <p className="nameRight"><span className="underline">David Gloaguen da Silva</span></p>
                <ul className="list">
                    <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
                    <li>Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2016)</li>
                    <li>Pós-graduado em Direito Imobiliário pela Universidade Católica &nbsp; Portuguesa - Porto (2019)</li>
                    <li>Línguas: Inglês</li>
                </ul>
                <ul className="icons cv">
                    <li><a href={cv1} className="icon fa-file" target="_blank"><span className="label">Curriculum Vitae</span></a>
                    <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
                </ul>
            {close}
            </article>
        )
    }
}

Team.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element.isRequired,
  }

export default Team
