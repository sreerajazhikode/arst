import { useState } from 'react'

const links = ['Home', 'About', 'Services', 'Projects', 'Contact']

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false)
  return <>
    <div className="topbar"><div className="shell"><span>STRUCTURAL · ARCHITECTURAL · CONSULTANCY</span><span>+91 90482 69584 &nbsp; | &nbsp; Kasaragod, Kerala</span></div></div>
    <header className={`nav ${scrolled ? 'fixed' : ''}`}>
      <div className="shell">
        <a className="brand" href="#home"><span className="brand-mark">A</span>ARST <small>DESIGN STUDIO</small></a>
        <nav className={`links ${open ? 'open' : ''}`}>
          {links.map(link => <a onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}
          <a className="quote" onClick={() => setOpen(false)} href="#contact">GET A QUOTE ↗</a>
        </nav>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button>
      </div>
    </header>
  </>
}
