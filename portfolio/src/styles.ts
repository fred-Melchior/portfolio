import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkBlue: '#192a56',
  mediumBlue: '#273c75',
  orange: '#e84118',
  black: '#000',
  white: '#f5f6fa',
  lightGrey: '#7f8fa6',
  darkGrey: '#353b48'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Barlow', sans-serif;
  list-style: none;
  text-decoration: none;
}

body {
  background-image: linear-gradient(to top, ${colors.black}, ${colors.darkGrey} 10%, ${colors.mediumBlue} 35%, ${colors.darkBlue} 55%);
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

h3 {
  margin-bottom: 16px;
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 4px;
}

p {
  font-size: 24px;
  line-height: 32px;
  color: ${colors.white};

  b {
    margin-right: 4px;
    color: ${colors.orange};
  }
`
