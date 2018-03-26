import styled from 'styled-components'
import { white2, gray } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const HeroBannerStyle = styled.div`
  position: relative;
  width: 100%;
  height: calc(80vh - 80px);
  border-bottom: 1px solid ${white2};
  .Container {
    z-index: 2;
    width: 100%;
    position: absolute;
    top: calc(50% - 10px);
    left: 50%;
    transform: translate(-50%, -50%);
    ${ media.mobile`
      width: 100%;
      padding: 0 24px;
      top: 50%;
    ` }
    h2  {
      font-family: 'inter-medium';
      font-size: 45px;
      line-height: 55px;
      ${ media.mobile`
        font-size: 26px;
        line-height: 32px;
        br { display: none; }
      ` }
    }
    p {
      font-family: 'inter-regular';
      margin-top: 20px;
      color: ${gray};
      font-size: 16px;
      line-height: 25px;
      margin-bottom: 45px;
    }
  }
  .Image {
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    img {
      pointer-events: none;
      height: 80%;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
`