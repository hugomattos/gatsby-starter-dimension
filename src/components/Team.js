import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useImageNuno } from "./hooks/useImageNuno"
import { useImageOctavio } from "./hooks/useImageOctavio"
import { useImageRafael } from "./hooks/useImageRafael"
import { useImageDavid } from "./hooks/useImageDavid"

import cvNuno from '../attachments/CV Nuno Matos.pdf'
import cvRafael from '../attachments/CV RCR 19.pdf'
import cvOctavio from '../attachments/CV Octávio Torres 2019.pdf'

const Team = () => {
    const close = this.props.close;
    const imageNuno = useImageNuno();
    const imageOctavio = useImageOctavio();
    const imageRafael = useImageRafael();
    const imageDavid = useImageDavid();
    return(
        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
            <h2 className="major">Equipa</h2>

            <span className="image team left"><Img fluid={imageNuno}/></span>
            <p className="name"><span className="underline">Nuno Silva Matos</span></p>
            <ul className="list">
                <li className="cv">Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2015)</li>
                <li className="cv">Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2018)</li>
                <li className="cv">Línguas: Inglês</li>
            </ul>
            <ul className="icons cv">
                <li className="cv"><a href={cvNuno} className="icon fa-file" target="_blank" rel="noopener noreferrer"><span className="label">Curriculum Vitae</span></a>
                <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
            </ul><br/><hr className="hr"/>

            <span className="image team right"><Img fluid={imageOctavio}/></span>
            <p className="nameRight"><span className="underline">Octávio Torres</span></p>
            <ul className="list">
                <li className="cv">Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
                <li className="cv">Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2017)</li>
                <li className="cv">Línguas: Inglês</li>
            </ul>
            <ul className="icons cv">
                <li className="cv"><a href={cvOctavio} className="icon fa-file" target="_blank" rel="noopener noreferrer"><span className="label">Curriculum Vitae</span></a>
                <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
            </ul><br/><hr className="hr"/>

            <span className="image team left"><Img fluid={imageRafael}/></span>
            <p className="name"><span className="underline">Rafael Corte Real</span></p>
            <ul className="list">
                <li className="cv">Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2015)</li>
                <li className="cv">Mestrando em Direito Fiscal na Universidade Católica Portuguesa - Porto</li>
                <li className="cv">Línguas: Inglês</li>
            </ul>
            <ul className="icons cv">
                <li className="cv"><a href={cvRafael} className="icon fa-file" target="_blank" rel="noopener noreferrer"><span className="label">Curriculum Vitae</span></a>
                <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
            </ul><br/><hr className="hr"/>

            <span className="image team right"><Img fluid={imageDavid}/></span>
            <p className="nameRight"><span className="underline">David Gloaguen da Silva</span></p>
            <ul className="list">
                <li className="cv">Licenciatura em Direito pela Universidade Católica Portuguesa - Porto (2014)</li>
                <li className="cv">Mestre em Direito Fiscal na Universidade Católica Portuguesa - Porto (2016)</li>
                <li className="cv">Pós-graduado em Direito Imobiliário pela Universidade Católica &nbsp; Portuguesa - Porto (2019)</li>
                <li className="cv">Línguas: Francês; Inglês</li>
            </ul>
            <ul className="icons cv">
                <li className="cv"><a href={""} className="icon fa-file" target="_blank" rel="noopener noreferrer"><span className="label">Curriculum Vitae</span></a> 
                <h5>&nbsp;&nbsp;Curriculum Vitae</h5></li>
            </ul>
        {close}
        </article>
    )
}

Team.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element.isRequired,
  }

export default Team
