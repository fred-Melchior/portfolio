import About from '../../Components/About'
import Education from '../../Components/Education'
import Footer from '../../Components/Footer'
import Portfolio from '../../Components/Portfolio'
import Header from '../../Components/Header'
import { GlobalStyle } from '../../styles'
import Portfolio2 from '../../Components/Portfolio2'

const Content = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Portfolio />
      <About />
      <Portfolio2 />
      <Education />
      <Footer />
    </>
  )
}

export default Content
