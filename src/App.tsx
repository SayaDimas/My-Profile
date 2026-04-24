import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Sertifikat from './components/Sertifikat'
import ForestBackground from './components/three/ForestBackground'
import './App.css'

function App() {
  return (
    <>
      <ForestBackground />
      <div className="app-content">
        <Navbar />
        <Hero />
        <Sertifikat />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
