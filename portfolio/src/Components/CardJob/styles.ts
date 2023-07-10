import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  border-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  will-change: transform;

  .cover {
    -webkit-transition: all 400ms ease-in-out;
    transition: all 400ms ease-in-out;
    will-change: transform;

    a {
      color: ${colors.white};
    }

    img {
      -webkit-transition: all 260ms ease-in-out;
      transition: all 260ms ease-in-out;
      border: 1px solid ${colors.white};
      border-radius: 8px;
      width: 240px;
      height: 320px;
    }
  }

  .cover::after {
    content: '';
    z-index: -99;
    position: absolute;
    top: 20px;
    left: -20px;
    display: block;
    width: 160px;
    height: 214px;
    opacity: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 160px 214px;
    -webkit-filter: blur(24px);
    filter: blur(24px);
    -webkit-transition: all 260ms ease-in-out;
    transition: all 260ms ease-in-out;
    will-change: transform;
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
  }

  &:hover {
    // width: 260px;

    .cover {
      -webkit-transform: translateY(-14px) scale(1.04);
      transform: translateY(-16px) translateX(16px) scale(1.04);

      img {
        border: 4px solid ${colors.white};
      }

      &:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
        background-color: ${colors.darkBlue};
        height: 100%;
        width: 300px;
      }
    }
  }
`
