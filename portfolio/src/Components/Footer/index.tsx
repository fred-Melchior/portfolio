import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterDiv className="container">
      <S.SocialMedia>
        <a
          href="https://github.com/fred-Melchior"
          target="_blank"
          rel="noreferrer"
        >
          <p>GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/frederico-melchior"
          target="_blank"
          rel="noreferrer"
        >
          <p>Linkedin</p>
        </a>
        <a
          href="mailto:frederico.melchior@gmail.com?subject=Desenvolvimento Frontend&body="
          target="_blank"
          rel="noreferrer"
        >
          <p>E-Mail</p>
        </a>
      </S.SocialMedia>
      <h4>Cascavel - Paraná - Brasil</h4>
    </S.FooterDiv>
  )
}

export default Footer
