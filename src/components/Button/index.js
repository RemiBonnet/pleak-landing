import React from 'react'
import { FormattedMessage } from 'react-intl'
import TweenLite, { Expo } from 'gsap'
import 'gsap/src/uncompressed/plugins/ScrollToPlugin'
import { ButtonStyle } from './style'
import { fiord, white } from '../../styles/colors'

const handleClick = props => {
  if (props.github) window.open('https://github.com/pleak', '_blank')
  if (props.documentation) window.open('https://github.com/pleak/pleak-react-perf-monitor/blob/master/README.md', '_blank')
  if (props.demo) {
    TweenLite.to(window, 1, {
      scrollTo: '.Beta',
      ease: Expo.easeOut
    })
  }
}

const Button = props => (
  <ButtonStyle
    noBg={props.noBg}
    dark={props.dark}
    onClick={() => handleClick(props)}>
    {props.github &&
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' clipRule='evenodd' d='M9.96942 0C4.46483 0 0 4.46483 0 9.96942C0 14.3731 2.87462 18.104 6.78899 19.4495C7.27829 19.5107 7.46177 19.2049 7.46177 18.9602C7.46177 18.7156 7.46177 18.104 7.46177 17.2477C4.70948 17.8593 4.09786 15.9021 4.09786 15.9021C3.66972 14.7401 2.99694 14.4343 2.99694 14.4343C2.07951 13.8226 3.0581 13.8226 3.0581 13.8226C4.0367 13.8838 4.58716 14.8624 4.58716 14.8624C5.50459 16.3914 6.91131 15.9633 7.46177 15.7187C7.52294 15.0459 7.82875 14.6177 8.07339 14.3731C5.87156 14.1284 3.5474 13.2722 3.5474 9.41896C3.5474 8.31804 3.91437 7.46177 4.58716 6.72783C4.52599 6.54434 4.15902 5.50459 4.70948 4.15902C4.70948 4.15902 5.56575 3.91437 7.46177 5.19878C8.25688 4.95413 9.11315 4.89297 9.96942 4.89297C10.8257 4.89297 11.682 5.01529 12.4771 5.19878C14.3731 3.91437 15.2294 4.15902 15.2294 4.15902C15.7798 5.50459 15.4128 6.54434 15.3517 6.78899C15.9633 7.46177 16.3914 8.37921 16.3914 9.48012C16.3914 13.3333 14.0673 14.1284 11.8654 14.3731C12.2324 14.6789 12.5382 15.2905 12.5382 16.208C12.5382 17.5535 12.5382 18.5933 12.5382 18.9602C12.5382 19.2049 12.7217 19.5107 13.211 19.4495C17.1865 18.104 20 14.3731 20 9.96942C19.9388 4.46483 15.474 0 9.96942 0Z' fill={`${props.dark ? fiord : white}`} />
      </svg>
    }

    {props.labelId ? <FormattedMessage id={props.labelId} /> : props.label}
  </ButtonStyle>
)

export default Button
