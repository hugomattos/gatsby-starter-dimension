import React from 'react'
import PropTypes from 'prop-types'

class Practices extends React.Component{
    render(){
        const close = this.props.close;
        return(
            <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Áreas de Prática</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus facilisis massa vitae eleifend. Phasellus in orci nibh. Vivamus maximus ligula eleifend, consequat libero non, bibendum odio. Vestibulum rutrum malesuada elementum. Pellentesque at velit ut lacus pellentesque ultrices. Aenean porttitor augue ac euismod tincidunt. Suspendisse euismod porta nibh, ut iaculis ante. Sed eu vulputate enim.</p>
                <p>Mauris vestibulum nec lorem et bibendum. Nunc tincidunt, lectus eget malesuada pretium, sapien neque sagittis augue, nec bibendum justo tortor eu felis. Integer volutpat arcu sit amet nisl venenatis cursus. Curabitur interdum turpis mi, ut tempor eros imperdiet non. Cras posuere orci ut venenatis viverra. Maecenas lectus est, lacinia in auctor eu, imperdiet at dui. Phasellus egestas felis quis nibh ornare, non mattis dolor feugiat.</p>
                <p>Duis ut pharetra eros. Nam bibendum a ante quis luctus. Nulla ac lectus eu odio tincidunt vulputate a in leo. Ut sed scelerisque est. Nullam euismod massa sapien, at eleifend turpis aliquet ac. Etiam sagittis lectus eu metus fermentum rhoncus. Nullam ut nisi a risus congue ullamcorper nec in eros. Nulla tincidunt accumsan euismod. Ut pharetra dolor sapien, eget mollis risus mollis ut. Aliquam laoreet feugiat scelerisque.</p>
                <p>Curabitur tristique condimentum quam facilisis viverra. Suspendisse ullamcorper magna sed lacus hendrerit pretium. Pellentesque laoreet pulvinar odio nec ullamcorper. Donec venenatis mi nisi, sed luctus velit rutrum nec. Quisque luctus vel purus ac cursus. Quisque vel ante lorem. Nulla semper vitae nulla bibendum consectetur. Nullam ac sodales mi.</p>
                <p>Suspendisse egestas fringilla justo, sed rhoncus nibh accumsan id. Fusce sed orci vel nisi dictum faucibus. Pellentesque aliquam, ante vel euismod feugiat, massa purus egestas urna, a pharetra sapien mi at metus. Nulla non tellus facilisis, iaculis felis ut, molestie leo. Nam id rutrum elit. Maecenas ullamcorper erat eget urna tristique, sit amet commodo magna pretium. Nulla dui turpis, fringilla in pulvinar a, cursus eu massa. Suspendisse venenatis sem erat, id convallis metus accumsan quis. Vestibulum sit amet malesuada eros, hendrerit faucibus turpis. Aliquam ultricies sodales volutpat. Maecenas elementum, lectus vel tempor efficitur, tellus ligula euismod quam, at convallis arcu diam sed ex. Phasellus ac purus velit. Nullam vitae tempus dolor.</p>
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