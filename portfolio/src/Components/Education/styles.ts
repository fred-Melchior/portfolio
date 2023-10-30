import styled from 'styled-components'
import { colors } from '../../styles'

export const EducationDiv = styled.div`
  margin-bottom: 72px;

  h3 {
    margin-bottom: 24px;
  }

  .div {
    display: flex;
    justify-content: space-between;
  }
`

export const Courses = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 40px;
  }
`

export const Languages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    margin-bottom: 16px;
    border-radius: 8px;
    padding: 8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${colors.white};
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    object-fit: cover;

    &.margin {
      margin: 0 32px;
    }
  }
`
