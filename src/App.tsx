import './App.scss'

import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Technologies from './components/Technologies/Technologies'
import Activity from './components/Activity/Activity'
import Showcase from './components/Showcase/Showcase'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Nav />
      <About/>
      <Technologies/>
      {/* <Activity/> */}
      <Showcase/>
      <Footer/>
      
    </>
  )
}

export default App
