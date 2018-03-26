import React from 'react'
import TweenLite, { Expo } from 'gsap'
import 'gsap/src/uncompressed/plugins/ScrollToPlugin'
import { ButtonStyle } from './style.js'

const handleClick = () => {
  TweenLite.to(window, 1, {
    scrollTo: '.Footer',
    ease: Expo.easeOut
  })
}

const Button = () => (
  <ButtonStyle onClick={() => handleClick()}>
    Sign up for our closed beta
    <span></span>
  </ButtonStyle>
)

export default Button
