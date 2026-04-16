import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0f1a45', color: 'white', paddingTop: '60px', paddingBottom: '24px' }}>
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="/logo.png" alt="Macia Inmobiliaria" style={{ height: '45px', width: 'auto' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '260px' }}>
              Tu inmobiliaria de confianza en Campana. Más de 15 años acompañando a familias y empresas.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <a href="https://instagram.com/macia.inmobiliaria" target="_blank" rel="noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Instagram size={16} />
              </a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontWeight: 600, marginBottom: '16px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)' }}>
              Navegación
            </p>
            {[['/', 'Inicio'], ['/catalogo', 'Propiedades'], ['/tasaciones', 'Tasaciones'], ['/nosotros', 'Nosotros'], ['/contacto', 'Contacto']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Servicios */}
          <div>
            <p style={{ fontWeight: 600, marginBottom: '16px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)' }}>
              Servicios
            </p>
            {['Venta de propiedades', 'Alquiler', 'Tasaciones', 'Administración', 'Asesoramiento'].map(s => (
              <p key={s} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '10px' }}>{s}</p>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <p style={{ fontWeight: 600, marginBottom: '16px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)' }}>
              Contacto
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:+5493489599581" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>
                <Phone size={15} /> +54 9 3489 59-9581
              </a>
              <a href="mailto:info@maciainmobiliaria.com.ar" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>
                <Mail size={15} /> info@maciainmobiliaria.com.ar
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
                <MapPin size={15} style={{ marginTop: '2px', flexShrink: 0 }} /> San Martín 450, Campana, Buenos Aires
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>© 2026 Macia Inmobiliaria. Todos los derechos reservados.</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Campana, Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
