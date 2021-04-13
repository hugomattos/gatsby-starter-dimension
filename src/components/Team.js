import React from 'react'
import PropTypes from 'prop-types'

import picNuno from '../images/nuno.jpg'
import picRafael from '../images/rafael.jpeg'
import picOctavio from '../images/octavio_1.jpg'
import picDavid from '../images/david.jpg'



class Team extends React.Component{
    render(){
        const close = this.props.close;
        return(
            <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Equipa</h2>

                <span className="image team left"><img src={picNuno} alt="" /></span>
                <p className="name"><span className="underline">Nuno Silva Matos</span></p>
                <ul className="list">
                    <li className="cv">Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2015)</li>
                    <li className="cv">Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2018)</li>
                    <li className="cv">Línguas: Inglês</li>
                </ul>
                {/*<ul className="icons cv">
                    <li className="cv"><a href={cvNuno} className="icon fa-file" target="_blank" rel="noopener noreferrer"><span className="label">Curriculum Vitae</span></a>
                    <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
                </ul>*/}

                <br/><hr className="hr"/>

                <span className="image team right"><img src={picOctavio} alt="" /></span>
                <p className="nameRight"><span className="underline">Octávio Torres</span></p>
                <ul className="list">
                    <li className="cv">Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
                    <li className="cv">Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2017)</li>
                    <li className="cv">Línguas: Inglês</li>
                </ul>
                {/*<ul className="icons cv">
                    <li className="cv"><a href={cvOctavio} className="icon fa-file" target="_blank" rel="noopener noreferrer"><span className="label">Curriculum Vitae</span></a>
                    <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
                </ul>*/}

                <br/><hr className="hr"/>

                <span className="image team left"><img src={picRafael} alt="" /></span>
                <p className="name"><span className="underline">Rafael Corte Real</span></p>
                <ul className="list">
                    <li className="cv">Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
                    <li className="cv">Frequência do Mestrado em Direito Fiscal na Universidade Católica Portuguesa - Porto (2014-2015) - Conclusão da Parte Letiva (55 ECTS)</li>
                    <li className="cv">Formador na área do Direito (Certificado de Competências Pedagógicas, 2020</li>
                    <li className="cv">Colunista convidado no Observador</li>
                    <li className="cv">Línguas: Inglês</li>
                </ul>
                {/*<ul className="icons cv">
                    <li className="cv"><a href={cvRafael} className="icon fa-file" target="_blank" rel="noopener noreferrer"><span className="label">Curriculum Vitae</span></a>
                    <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
                </ul>*/}

                <br/><hr className="hr"/>

                <span className="image team right"><img src={picDavid} alt="" /></span>
                <p className="nameRight"><span className="underline">David Gloaguen da Silva</span></p>
                <ul className="list">
                    <li className="cv">Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
                    <li className="cv">Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2016)</li>
                    <li className="cv">Pós-graduado em Direito Imobiliário pela Universidade Católica &nbsp; Portuguesa - Porto (2019)</li>
                    <li className="cv">Línguas: Francês; Inglês</li>
                </ul>
                {/*<ul className="icons cv">
                    <li className="cv"><a href={""} className="icon fa-file" target="_blank" rel="noopener noreferrer"><span className="label">Curriculum Vitae</span></a> 
                    <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
                </ul>*/}
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
