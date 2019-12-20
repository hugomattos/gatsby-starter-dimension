import React from 'react'
import PropTypes from 'prop-types'

class Contact extends React.Component{
    render(){
        const close = this.props.close;
        return(
            <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Contactos</h2>
                <i className="icon fa-map-pin"></i><h4>&nbsp;Morada</h4>
                <p>Av. Dr. Domingos Gonçalves de Sá 434, sala 21 <br />
                4435-213 <br />
                Rio Tinto</p>
                <i className="icon fa-phone"></i><h4>&nbsp;Telefone</h4>
                <p>22 110 6669</p>
                <ul className="icons">
                    <li><a href="https://www.facebook.com/ctmadv/" className="icon fa-facebook" target="_blank" rel="noopener noreferrer"><span className="label">Facebook</span></a></li>
                </ul>
                <div className="map">
                    <iframe title="map" width="100%" height="300px" src="https://maps.google.com/maps?width=100%&amp;height=800&amp;hl=en&amp;q=Av.%20Dr.%20Domingos%20Gon%C3%A7alves%20de%20S%C3%A1%20434%20sala%2021%2C%204435-213%20Rio%20Tinto+(CTM%20Advogados)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" scrolling="no"></iframe>
                </div><br />
                {close}
            </article>
        )
    }
}

Contact.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element.isRequired,
  }

  export default Contact