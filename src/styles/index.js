import reset from 'styled-reset'
import { injectGlobal } from 'styled-components'
import fonts from './fonts.js'

const baseStyles = () => injectGlobal`
  ${reset}
  ${fonts}

  body {
    margin: 0;
    overflow-x: hidden;
    background-color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * ::selection {
    background: #0A0A0A;
    color: #FFFFFF;
  }

  * {
    box-sizing: border-box;
  }

  .Container {
    position: relative;
    display: block;
    margin: 0 auto;
    max-width: 1008px;
  }
`

export default baseStyles