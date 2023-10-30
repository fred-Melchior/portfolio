import CardJob from '../CardJob'
import { Projects, Section } from './styles'

import efood from '../../assets/images/efood.png'
import ebacTalks from '../../assets/images/EBACTalks.png'
import pixel from '../../assets/images/pixelguy.png'

const Portfolio2 = () => {
  return (
    <div className="container">
      <Section>
        <h3>
          More of <br />
          my work
        </h3>
        <Projects>
          <CardJob
            href={'https://ebac-talks-alpha.vercel.app/'}
            image={ebacTalks}
            altName={'Ebac Talks'}
            siteName={'Ebac Talks'}
          />
          <CardJob
            href={'https://pixel-guy.vercel.app'}
            image={pixel}
            altName={'Pixel Guy'}
            siteName={'Pixel Guy'}
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

export default Portfolio2
