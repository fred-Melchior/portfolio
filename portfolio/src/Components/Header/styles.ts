import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.div`
  height: 50vh;
  padding: 32px;
  background-image: linear-gradient(
    to bottom,
    ${colors.black},
    ${colors.black},
    transparent
  );
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // position: relative;
  }

  h1 {
    font-size: 80px;
    text-transform: uppercase;
  }
`

export const Dev = styled.h2`
  margin-top: 32px;
  text-transform: uppercase;
  background-image: linear-gradient(
    225deg,
    ${colors.white} 0%,
    ${colors.lightGrey} 29%,
    ${colors.mediumBlue} 67%,
    ${colors.darkBlue} 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
  font-size: 40px;
  letter-spacing: 4px;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`
