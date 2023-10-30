import CardJob from '../CardJob'
import { Projects, Section } from './styles'

import eplay from '../../assets/images/eplay.png'
import twtr from '../../assets/images/tweeter.png'
import ccc from '../../assets/images/ccc.png'

const Portfolio = () => {
  return (
    <div className="container">
      <Section>
        <h3>
          My <br />
          best Jobs
        </h3>
        <Projects>
          <CardJob
            href={'http://fredmelchior.pythonanywhere.com/'}
            image={twtr}
            altName={'Tweeter'}
            siteName={'Tweeter'}
          />
          <CardJob
            href={'https://eplay-azure.vercel.app'}
            image={eplay}
            altName={'Eplay'}
            siteName={'Eplay'}
          />
          <CardJob
            href={'https://cuidandocomcoracao.vercel.app/'}
            image={ccc}
            altName={'Cuidando com o coração'}
            siteName={'Cuidando com o coração'}
          />
        </Projects>
      </Section>
    </div>
  )
}

export default Portfolio
