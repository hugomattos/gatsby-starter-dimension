import React from 'react'
import Form from'./Form'
import PropTypes from 'prop-types'

class Appointment extends React.Component{
    render(){
        const close = this.props.close;
        return(
            <article id="appointment" className={`${this.props.article === 'appointment' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Consulta Online</h2>
                <p>Colocamos à sua disposição um serviço de consulta jurídica por correio eletrónico, através do qual poderão ser prestados serviços de advocacia preventiva, de uma forma célere, clara e devidamente fundamentada, registando-se através formulário com os dados abaixo indicados.    Após a recepção da sua mensagem por correio electrónico, será informado via e-mail, do valor dos honorários correspondentes, os quais devem ser liquidados antes do envio da resposta à questão solicitada, num prazo máximo de três dias, findo os quais deixaremos de considerar o pedido formulado</p>
                <p>Na mesma senda, pretende-se de forma cómoda e menos dispendiosa, a possibilidade de formular, através do meio acima referido, questões de natureza jurídica e de carácter geral.</p>
                <p>Faz-se uma chamada de atenção de que atendendo à natureza do meio de comunicação utilizado a “consulta jurídica online” não abrange questões cuja resposta dependa da análise presencial de documentos ou da intervenção pessoal do Advogado.</p>
                <p>Nesses termos, o Advogado deverá abster-se de prestar a consulta, porquanto entende que de acordo com os usos, costumes e tradições da prática forense imponham que aquele caso em concreto deva funcionar a regra do contacto pessoal e directo com o cliente. Caso pretenda ver esclarecida uma questão concreta e pessoal, terá de ser feita de forma presencial.</p>
                <Form />
                {close}
            </article>
        )
    }
}

Appointment.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element.isRequired,
  }

export default Appointment