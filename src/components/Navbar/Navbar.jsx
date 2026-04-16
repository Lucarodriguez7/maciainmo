import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { gsap } from 'gsap'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Propiedades' },
  { to: '/tasaciones', label: 'Tasaciones' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 2.2 }
    )
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(27,42,107,0.1)' : 'none',
        transition: 'all 0.4s ease',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="container-max px-4 md:px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Macia Inmobiliaria" style={{ height: '40px', width: 'auto' }} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontFamily: 'Lato, sans-serif', fontSize: '0.875rem', fontWeight: 500,
                color: isActive(l.to) ? '#1B2A6B' : scrolled ? '#1A1A1A' : 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                borderBottom: isActive(l.to) ? '2px solid #1B2A6B' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contacto" className="btn-primary" style={{ padding: '10px 24px', borderRadius: '10px', fontSize: '0.875rem' }}>
            Consultar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen
            ? <X size={24} color={scrolled ? '#1B2A6B' : 'white'} />
            : <Menu size={24} color={scrolled ? '#1B2A6B' : 'white'} />
          }
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #f0f0f0', padding: '16px' }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                display: 'block', padding: '12px 16px',
                fontFamily: 'Lato, sans-serif', fontWeight: 500,
                color: isActive(l.to) ? '#1B2A6B' : '#1A1A1A',
                textDecoration: 'none', borderRadius: '8px',
                background: isActive(l.to) ? '#f0f3ff' : 'transparent',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contacto" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '8px' }}>
            Consultar
          </Link>
        </div>
      )}
    </nav>
  )
}
