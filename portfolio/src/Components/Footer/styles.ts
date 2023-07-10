import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterDiv = styled.div`
  margin-top: 64px;
  padding: 40px 0;
  // background-color: tranparent;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin-bottom: 4px;
    color: #fff;
    font-style: italic;
    letter-spacing: 4px;
  }
`

export const ContactInfo = styled.div`
  padding: 8px;
`

export const SocialMedia = styled.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  justify-content: space-around;

  a {
    color: ${colors.white};

    p {
      font-size: 24px;
      border-bottom: 2px solid ${colors.lightGrey};

      &:hover {
        border-bottom: 4px solid ${colors.orange};
        font-size: 28px;
      }
    }
  }
`
