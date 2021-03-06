import React from 'react'
import PropTypes from 'prop-types'

import Appointment from './Appointment'
import Contact from './Contact'
import CTM from './CTM'
import Practices from './Practices'
import Team from './Team'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>   
        <CTM 
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          close={close}
        />
        <Team 
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          close={close}
        />
        <Practices
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          close={close} 
        />
        <Appointment
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          close={close} 
        />
        <Contact 
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          close={close} 
        />
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