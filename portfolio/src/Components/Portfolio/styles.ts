import styled from 'styled-components'

export const Section = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
  -webkit-perspective: 90rem;
  perspective: 90rem;
  -webkit-perspective-origin: 34% 61%;
  perspective-origin: 34% 61%;

  h3 {
    margin: 16px auto 24px;
  }
`

export const Projects = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 80vw;
  height: 70vh;
  margin-bottom: 72px;
  margin-left: 6vw;
  transform: rotateX(7deg) rotateZ(-4deg) rotateY(13deg) scale3d(1, 1, -0.9);
  -webkit-transform: rotateX(23deg) rotateZ(-9deg) rotateY(15deg)
    scale3d(1, 1, -0.9);
  transform: rotateX(23deg) rotateZ(-9deg) rotateY(15deg) scale3d(1, 1, -0.9);
`
