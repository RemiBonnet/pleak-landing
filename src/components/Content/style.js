import styled from 'styled-components'
import { white2 } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const ContentStyle = styled.div`
  .row {
    padding-top: 115px;
    padding-bottom: 110px;
    border-bottom: 1px solid ${white2};
    ${ media.tablet`
      padding-left: 24px;
      padding-right: 24px;
    `}
    ${ media.mobile`
      padding: 0 24px;
      border-bottom: 0;
    ` }
  }
`