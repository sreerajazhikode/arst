import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 42)
    addEventListener('scroll', update)
    return () => removeEventListener('scroll', update)
  }, [])

  return <>
    <Header scrolled={scrolled} />
    <main><Hero /><About /><Services /><Projects /><Process /><Contact /></main>
    <Footer />
  </>
}
