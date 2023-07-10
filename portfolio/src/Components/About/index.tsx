import { AboutMe, Infos, TextInfo } from './styles'

const About = () => {
  return (
    <div className="container">
      <AboutMe>
        <Infos>
          <h3>Sobre mim</h3>
          <TextInfo>
            <p>
              Tenho 25 anos, atualmente moro em Cascavel-PR. Versatilidade e{' '}
              <b>criatividade</b>, são qualidades que sempre tive consciência, a
              programação me mostrou a <b>utilidade</b> delas na <b>solução</b>{' '}
              de problemas, e assim, encontrei meu lugar no
              <b> mundo</b>.
            </p>
          </TextInfo>
        </Infos>
      </AboutMe>
    </div>
  )
}

export default About
