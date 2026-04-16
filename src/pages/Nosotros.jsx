import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, Heart, Users, Shield, TrendingUp, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const team = [
  { name: 'Carlos Macia', role: 'Director Comercial', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', desc: 'Más de 20 años en el mercado inmobiliario de Campana.' },
  { name: 'Laura González', role: 'Asesora Senior', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', desc: 'Especialista en propiedades residenciales y tasaciones.' },
  { name: 'Martín Torres', role: 'Asesor Comercial', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', desc: 'Experto en locales comerciales y propiedades industriales.' },
]

const values = [
  { icon: Heart, title: 'Compromiso', desc: 'Nos comprometemos con cada cliente como si fuera nuestro único cliente.' },
  { icon: Shield, title: 'Transparencia', desc: 'Operaciones claras, sin letra chica y con todo el respaldo legal.' },
  { icon: Users, title: 'Cercanía', desc: 'Somos una empresa familiar con valores arraigados en la comunidad.' },
  { icon: TrendingUp, title: 'Excelencia', desc: 'Buscamos el mejor resultado posible en cada operación.' },
]

const metrics = [
  { number: '15+', label: 'Años de experiencia' },
  { number: '400+', label: 'Clientes satisfechos' },
  { number: '150+', label: 'Propiedades vendidas' },
  { number: '98%', label: 'Índice de satisfacción' },
]

export default function Nosotros() {
  const heroRef = useRef(null)
  const teamRef = useRef(null)
  const valuesRef = useRef(null)
  const metricsRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(heroRef.current?.querySelectorAll('.hero-item'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
    )
    gsap.fromTo(teamRef.current?.querySelectorAll('.team-card'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: teamRef.current, start: 'top 80%' } }
    )
    gsap.fromTo(valuesRef.current?.querySelectorAll('.value-card'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: valuesRef.current, start: 'top 80%' } }
    )
    gsap.fromTo(metricsRef.current?.querySelectorAll('.metric-item'),
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: metricsRef.current, start: 'top 85%' } }
    )
  }, [])

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} style={{
        background: `linear-gradient(rgba(15,26,69,0.75), rgba(15,26,69,0.65)), url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80) center/cover`,
        padding: '140px 16px 80px', textAlign: 'center'
      }}>
        <div className="container-max">
          <p className="hero-item" style={{ opacity: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Conocenos
          </p>
          <h1 className="hero-item" style={{ opacity: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px' }}>
            Una empresa familiar<br /><em>con raíces en Campana</em>
          </h1>
          <p className="hero-item" style={{ opacity: 0, color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Más de 15 años acompañando a familias y empresas en sus decisiones inmobiliarias más importantes.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section style={{ background: 'white', padding: '80px 16px' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#1B2A6B', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '16px' }}>Nuestra historia</p>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>De Campana para Campana</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#555', fontSize: '0.95rem', lineHeight: 1.8 }}>
              <p>
                Macia Inmobiliaria nació en Campana con un objetivo claro: ser la inmobiliaria de confianza de la comunidad local. Desde nuestros inicios, apostamos por el trato personalizado y el conocimiento profundo del mercado de la zona.
              </p>
              <p>
                A lo largo de más de 15 años, hemos acompañado a cientos de familias en la compra, venta y alquiler de sus propiedades. Conocemos cada barrio, cada calle y cada oportunidad que ofrece Campana y la región.
              </p>
              <p>
                Hoy somos un equipo consolidado que combina experiencia, tecnología y un trato humano que nos distingue en el mercado.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px', color: '#1B2A6B' }}>
              <MapPin size={16} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>San Martín 450, Campana, Buenos Aires</span>
            </div>
          </div>
          <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(27,42,107,0.15)' }}>
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80" alt="Oficina Macia" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Logo section */}
      <section style={{ background: '#F8F8F8', padding: '60px 16px', textAlign: 'center' }}>
        <div className="container-max">
          <svg width="120" height="120" viewBox="0 0 80 80" fill="none" style={{ margin: '0 auto 20px' }}>
            <circle cx="40" cy="40" r="38" stroke="rgba(27,42,107,0.15)" strokeWidth="1.5" />
            <path d="M40 8 L52 22 M40 8 L28 22" stroke="#1B2A6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 8 L40 52" stroke="#1B2A6B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="40" cy="40" r="7" fill="#1B2A6B" />
            <path d="M40 40 L60 50" stroke="#8A8A8A" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M40 40 L20 30" stroke="#8A8A8A" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: '#1B2A6B' }}>Macia</p>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8A8A8A', marginTop: '4px' }}>Inmobiliaria</p>
        </div>
      </section>

      {/* Metrics */}
      <section ref={metricsRef} style={{ background: '#1B2A6B', padding: '60px 16px' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {metrics.map(({ number, label }) => (
            <div key={label} className="metric-item">
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: 'white' }}>{number}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginTop: '6px' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} style={{ background: 'white', padding: '80px 16px' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#1B2A6B', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>El equipo</p>
            <h2 className="section-title">Las personas detrás de Macia</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            {team.map(({ name, role, img, desc }) => (
              <div key={name} className="team-card" style={{ background: '#F8F8F8', borderRadius: '20px', overflow: 'hidden', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(27,42,107,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ height: '260px', overflow: 'hidden' }}>
                  <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1B2A6B', fontSize: '1.1rem', marginBottom: '4px' }}>{name}</h3>
                  <p style={{ color: '#8A8A8A', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>{role}</p>
                  <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} style={{ background: '#F8F8F8', padding: '80px 16px' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#1B2A6B', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>Lo que nos guía</p>
            <h2 className="section-title">Nuestros valores</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="value-card" style={{ background: 'white', borderRadius: '20px', padding: '32px 28px', boxShadow: '0 2px 20px rgba(27,42,107,0.06)', border: '1px solid rgba(27,42,107,0.06)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f0f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Icon size={22} color="#1B2A6B" />
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1B2A6B', fontSize: '1.05rem', marginBottom: '10px' }}>{title}</h3>
                <p style={{ color: '#8A8A8A', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
