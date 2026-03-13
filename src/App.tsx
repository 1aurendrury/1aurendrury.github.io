import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Personal from './components/Personal'

function App() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Personal />
      <Contact />
    </div>
  )
}

export default App