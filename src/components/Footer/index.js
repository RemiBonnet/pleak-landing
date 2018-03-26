import React from 'react'
import { FooterStyle } from './style.js'
import Newsletter from '../../components/Newsletter'
import FooterSocial from '../../components/FooterSocial'

const Footer = () => {
  return(
    <FooterStyle className="Footer">
      <div className="Container">
        <h3>Keep me informed about <br /> the closed beta</h3>
        <p>
          Interested about our service ? <br />
          Leave us your email and we'll happily send you <br /> 
          an access on our private beta launch !
        </p>
        <Newsletter />
      </div>
      <FooterSocial />
    </FooterStyle>
  )
}

export default Footer

