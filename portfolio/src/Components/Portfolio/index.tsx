import CardJob from '../CardJob'
import { Projects, Section } from './styles'

import efood from '../../assets/images/efood.png'
import ebacTalks from '../../assets/images/EBACTalks.png'
import eplay from '../../assets/images/eplay.png'

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
            href={'https://ebac-talks-alpha.vercel.app/'}
            image={ebacTalks}
            altName={'Ebac Talks'}
            siteName={'Ebac Talks'}
          />
          <CardJob
            href={'https://eplay-azure.vercel.app'}
            image={eplay}
            altName={'Eplay'}
            siteName={'Eplay'}
          />
          <CardJob
            href={'https://efood-weld.vercel.app'}
            image={efood}
            altName={'Efood'}
            siteName={'Efood'}
          />
        </Projects>
      </Section>
    </div>
  )
}

export default Portfolio
