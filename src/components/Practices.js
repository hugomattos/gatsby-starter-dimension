import React from 'react'
import PropTypes from 'prop-types'

import { PRACTICES } from '../utils/Constants'

class Practices extends React.Component{
    render(){
        const close = this.props.close;
        const practices = PRACTICES.types;
        return(
            <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Áreas de Prática</h2>
                <div id="#accordion" className="tabs">
                    {practices.map((pr, index) => {
                        return <div key={"d" + index} className="tab">
                                    <input key={"i" + index} type="checkbox" id={"chck" + index } />
                                    <label className="tab-label" htmlFor={"chck" + index }>{pr.name}</label>
                                    <div key={"div" + index} className="tab-content">
                                        {pr.description.map((element, indexE) => {
                                            return(<p key={"p" + indexE}>{element}</p>)
                                        })}
                                    </div>
                                </div>
                    })}
                </div>
                {close}
            </article>
        )
    }
}

Practices.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element.isRequired,
  }
export default Practices