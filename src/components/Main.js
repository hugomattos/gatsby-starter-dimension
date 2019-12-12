import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
//import pic03 from '../images/entrada.jpg'
import picSaul from '../images/saul.jpg'
import picAlves from '../images/rogerioalves.jpg'
import picVentura from '../images/ventura.png'
import picMarinho from '../images/marinhopinto.jpg'
import pic04 from '../images/logo.png'
import pic05 from '../images/ctm_no_background.png'


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">CTM Advogados</h2>
          {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
          <p>A CTM Advogados é um escritório composto por 4 Advogados, com sólida formação académica em Direito, que se norteiam por valores de ética, lealdade, independência, rigor, transparência e deontologia ao serviço da comunidade. O sigilo profissional e a confidencialidade são valores absolutos.</p>
        	<p>O nosso atendimento personalizado com os clientes é sempre acautelado com todo o profissionalismo, relação de confiança e de compromisso na defesa dos seus interesses.</p>
        	<p>Como é imperioso para atingir a qualidade na prestação de serviços jurídicos de excelência num mundo moderno e em transformação, a equipa da CTM Advogados assume uma formação contínua, de forma a garantir um melhor serviço à disposição dos seus clientes.</p>      
          {close}
        </article>
        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Equipa</h2>
          {/*<span className="image main"><img src={pic03} alt="" /></span>*/}

          <span className="image left"><img src={picSaul} alt="" /></span>
          <p className="name"><a href="">Nuno Silva Matos:</a></p>
          <ul>
            <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2015)</li>
            <li>Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2018)</li>
            <li>Línguas: Inglês</li>
          </ul><br/><hr></hr>

          <span className="image right"><img src={picAlves} alt="" /></span>
          <p className="nameRight"><a href="">Octávio Torres:</a></p>
          <ul>
            <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
            <li>Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2017)</li>
            <li>Línguas: Inglês</li>
          </ul><br/><hr></hr>

          <span className="image left"><img src={picMarinho} alt="" /></span>
          <p className="name"><a href="">Rafael Corte Real:</a></p>
          <ul>
            <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2015)</li>
            <li>Mestrando em Direito Fiscal na Universidade Católica Portuguesa - Porto</li>
            <li>Línguas: Inglês</li>
          </ul><br/><hr></hr>

          <span className="image right"><img src={picVentura} alt="" /></span>
          <p className="nameRight"><a href="">David Gloaguen da Silva:</a></p>
          <ul>
            <li>Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
            <li>Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2016)</li>
            <li>Pós-graduado em Direito Imobiliário pela Universidade Católica &nbsp; Portuguesa - Porto (2019)</li>
            <li>Línguas: Inglês</li>
          </ul><br/><hr></hr>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Áreas de Prática</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus facilisis massa vitae eleifend. Phasellus in orci nibh. Vivamus maximus ligula eleifend, consequat libero non, bibendum odio. Vestibulum rutrum malesuada elementum. Pellentesque at velit ut lacus pellentesque ultrices. Aenean porttitor augue ac euismod tincidunt. Suspendisse euismod porta nibh, ut iaculis ante. Sed eu vulputate enim.</p>
<p>Mauris vestibulum nec lorem et bibendum. Nunc tincidunt, lectus eget malesuada pretium, sapien neque sagittis augue, nec bibendum justo tortor eu felis. Integer volutpat arcu sit amet nisl venenatis cursus. Curabitur interdum turpis mi, ut tempor eros imperdiet non. Cras posuere orci ut venenatis viverra. Maecenas lectus est, lacinia in auctor eu, imperdiet at dui. Phasellus egestas felis quis nibh ornare, non mattis dolor feugiat.</p>
<p>Duis ut pharetra eros. Nam bibendum a ante quis luctus. Nulla ac lectus eu odio tincidunt vulputate a in leo. Ut sed scelerisque est. Nullam euismod massa sapien, at eleifend turpis aliquet ac. Etiam sagittis lectus eu metus fermentum rhoncus. Nullam ut nisi a risus congue ullamcorper nec in eros. Nulla tincidunt accumsan euismod. Ut pharetra dolor sapien, eget mollis risus mollis ut. Aliquam laoreet feugiat scelerisque.</p>
<p>Curabitur tristique condimentum quam facilisis viverra. Suspendisse ullamcorper magna sed lacus hendrerit pretium. Pellentesque laoreet pulvinar odio nec ullamcorper. Donec venenatis mi nisi, sed luctus velit rutrum nec. Quisque luctus vel purus ac cursus. Quisque vel ante lorem. Nulla semper vitae nulla bibendum consectetur. Nullam ac sodales mi.</p>
<p>Suspendisse egestas fringilla justo, sed rhoncus nibh accumsan id. Fusce sed orci vel nisi dictum faucibus. Pellentesque aliquam, ante vel euismod feugiat, massa purus egestas urna, a pharetra sapien mi at metus. Nulla non tellus facilisis, iaculis felis ut, molestie leo. Nam id rutrum elit. Maecenas ullamcorper erat eget urna tristique, sit amet commodo magna pretium. Nulla dui turpis, fringilla in pulvinar a, cursus eu massa. Suspendisse venenatis sem erat, id convallis metus accumsan quis. Vestibulum sit amet malesuada eros, hendrerit faucibus turpis. Aliquam ultricies sodales volutpat. Maecenas elementum, lectus vel tempor efficitur, tellus ligula euismod quam, at convallis arcu diam sed ex. Phasellus ac purus velit. Nullam vitae tempus dolor.</p>
          {close}
        </article>

        <article id="appointment" className={`${this.props.article === 'appointment' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Consulta Online</h2>
          <p>Colocamos à sua disposição um serviço de consulta jurídica por correio eletrónico, através do qual poderão ser prestados serviços de advocacia preventiva, de uma forma célere, clara e devidamente fundamentada, registando-se através formulário com os dados abaixo indicados.    Após a recepção da sua mensagem por correio electrónico, será informado via e-mail, do valor dos honorários correspondentes, os quais devem ser liquidados antes do envio da resposta à questão solicitada, num prazo máximo de três dias, findo os quais deixaremos de considerar o pedido formulado</p>
          <p>Na mesma senda, pretende-se de forma cómoda e menos dispendiosa, a possibilidade de formular, através do meio acima referido, questões de natureza jurídica e de carácter geral.</p>
          <p>Faz-se uma chamada de atenção de que atendendo à natureza do meio de comunicação utilizado a “consulta jurídica online” não abrange questões cuja resposta dependa da análise presencial de documentos ou da intervenção pessoal do Advogado.</p>
          <p>Nesses termos, o Advogado deverá abster-se de prestar a consulta, porquanto entende que de acordo com os usos, costumes e tradições da prática forense imponham que aquele caso em concreto deva funcionar a regra do contacto pessoal e directo com o cliente. Caso pretenda ver esclarecida uma questão concreta e pessoal, terá de ser feita de forma presencial.</p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <div className="actions">
              <input type="submit" value="Enviar" className="special" />
            </div>
          </form>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contactos</h2>
          <a href="#" className="icon fa-facebook"></a><p>Av. Dr. Domingos Gonçalves de Sá 434 sala 21, 4435-213 Rio Tinto</p>
          <a href="#" className="icon fa-facebook"></a><p>22 110 6669</p>
          <ul className="icons">
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          </ul>
          <div>
            <iframe width="100%" height="300px" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Av.%20Dr.%20Domingos%20Gon%C3%A7alves%20de%20S%C3%A1%20434%20sala%2021%2C%204435-213%20Rio%20Tinto+(CTM%20Advogados)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" scrolling="no"></iframe>
          </div><br />
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main