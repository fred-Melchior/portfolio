import Header from './Components/Header'
import About from './Components/About'
import { GlobalStyle } from './styles'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'
import Education from './Components/Education'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Portfolio />
      <About />
      <Education />
      <Footer />
    </>
  )
}

export default App
