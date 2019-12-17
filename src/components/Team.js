import React from 'react'
import PropTypes from 'prop-types'

import picSaul from '../images/saul.jpg'
import picAlves from '../images/rogerioalves.jpg'
import picVentura from '../images/ventura.png'
import picMarinho from '../images/marinhopinto.jpg'

class Team extends React.Component{
    render(){
        const close = this.props.close;
        return(
            <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Equipa</h2>
                {/*<span className="image main"><img src={pic03} alt="" /></span>*/}

                <span className="image left"><img src={picSaul} alt="" /></span>
                <p className="name"><a href="#">Nuno Silva Matos:</a></p>
                <ul>
                    <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2015)</li>
                    <li>Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2018)</li>
                    <li>Línguas: Inglês</li>
                </ul><br/><hr></hr>

                <span className="image right"><img src={picAlves} alt="" /></span>
                <p className="nameRight"><a href="#">Octávio Torres:</a></p>
                <ul>
                    <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
                    <li>Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2017)</li>
                    <li>Línguas: Inglês</li>
                </ul><br/><hr></hr>

                <span className="image left"><img src={picMarinho} alt="" /></span>
                <p className="name"><a href="#">Rafael Corte Real:</a></p>
                <ul>
                    <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2015)</li>
                    <li>Mestrando em Direito Fiscal na Universidade Católica Portuguesa - Porto</li>
                    <li>Línguas: Inglês</li>
                </ul><br/><hr></hr>

                <span className="image right"><img src={picVentura} alt="" /></span>
                <p className="nameRight"><a href="#">David Gloaguen da Silva:</a></p>
                <ul>
                    <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
                    <li>Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2016)</li>
                    <li>Pós-graduado em Direito Imobiliário pela Universidade Católica &nbsp; Portuguesa - Porto (2019)</li>
                    <li>Línguas: Inglês</li>
                </ul><br/><hr></hr>
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
