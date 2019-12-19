import React from 'react'
import PropTypes from 'prop-types'

import pic04 from '../images/aereal.jpg'

class CTM extends React.Component{
    render(){
        const close = this.props.close;
        return(
            <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">CTM Advogados</h2>
                <span className="image main"><img src={pic04} alt="" /></span>
                <p>A CTM Advogados é um escritório composto por 4 Advogados, com sólida formação académica em Direito, que se norteiam por valores de ética, lealdade, independência, rigor, transparência e deontologia ao serviço da comunidade. O sigilo profissional e a confidencialidade são valores absolutos.</p>
        	    <p>O nosso atendimento personalizado com os clientes é sempre acautelado com todo o profissionalismo, relação de confiança e de compromisso na defesa dos seus interesses.</p>
        	    <p>Como é imperioso para atingir a qualidade na prestação de serviços jurídicos de excelência num mundo moderno e em transformação, a equipa da CTM Advogados assume uma formação contínua, de forma a garantir um melhor serviço à disposição dos seus clientes.</p>      
                {close}
            </article>
        )
    }
}

CTM.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element.isRequired,
  }

export default CTM