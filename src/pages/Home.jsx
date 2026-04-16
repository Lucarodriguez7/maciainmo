import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Home, Building2, Maximize2, TrendingUp, Star, ChevronRight, Phone, ArrowRight, Award, Users, MapPin, CheckCircle } from 'lucide-react'
import PropertyCard from '../components/PropertyCard/PropertyCard'
import { properties } from '../data/properties'

gsap.registerPlugin(ScrollTrigger)

const HERO_IMG = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80'

const testimonials = [
  { name: 'Claudia Romero', text: 'Excelente atención. Nos ayudaron a encontrar la casa ideal en tiempo récord. Muy profesionales y atentos en todo momento.', stars: 5 },
  { name: 'Martín Suárez', text: 'La tasación fue precisa y el proceso de venta muy ágil. Recomiendo ampliamente a Macia para cualquier operación inmobiliaria.', stars: 5 },
  { name: 'Luciana Fernández', text: 'Compramos nuestro primer departamento con ellos y fue una experiencia increíble. Nos guiaron en cada paso.', stars: 5 },
  { name: 'Roberto Gómez', text: 'Alquilamos un local comercial y todo salió perfecto. Conocen muy bien el mercado de Campana.', stars: 5 },
]

const services = [
  { icon: Home, title: 'Venta', desc: 'Encontrá tu propiedad ideal o vendé la tuya al mejor precio del mercado.' },
  { icon: Building2, title: 'Alquiler', desc: 'Amplio catálogo de propiedades en alquiler para todos los presupuestos.' },
  { icon: TrendingUp, title: 'Tasaciones', desc: 'Valuación profesional y precisa para conocer el valor real de tu inmueble.' },
  { icon: Award, title: 'Administración', desc: 'Gestionamos tu propiedad de forma integral para que no tengas que preocuparte.' },
]

const whyUs = [
  { icon: Award, title: '+15 años de experiencia', desc: 'Trayectoria consolidada en el mercado inmobiliario de Campana y la región.' },
  { icon: Users, title: 'Atención personalizada', desc: 'Cada cliente es único. Te acompañamos en cada etapa del proceso.' },
  { icon: MapPin, title: 'Conocemos la zona', desc: 'Expertos en el mercado local: barrios, precios y oportunidades.' },
  { icon: CheckCircle, title: 'Transparencia total', desc: 'Operaciones claras, seguras y con todo el respaldo legal.' },
]

export default function HomePage() {
  const heroRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroSubRef = useRef(null)
  const heroCtaRef = useRef(null)
  const whyRef = useRef(null)
  const servicesRef = useRef(null)
  const propsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const delay = 2.3

    // Hero animations
    gsap.fromTo(heroTitleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay }
    )
    gsap.fromTo(heroSubRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: delay + 0.2 }
    )
    gsap.fromTo(heroCtaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: delay + 0.4 }
    )

    // Why us cards
    gsap.fromTo(whyRef.current?.querySelectorAll('.why-card'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: whyRef.current, start: 'top 80%' }
      }
    )

    // Services
    gsap.fromTo(servicesRef.current?.querySelectorAll('.service-card'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' }
      }
    )

    // Properties
    gsap.fromTo(propsRef.current?.querySelectorAll('.prop-card'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: propsRef.current, start: 'top 75%' }
      }
    )

    // Testimonials
    gsap.fromTo(testimonialsRef.current?.querySelectorAll('.testimonial-card'),
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: testimonialsRef.current, start: 'top 80%' }
      }
    )

    // CTA
    gsap.fromTo(ctaRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' }
      }
    )
  }, [])

  const featured = properties.filter(p => p.featured).slice(0, 6)

  return (
    <main>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh', position: 'relative', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: `linear-gradient(rgba(15,26,69,0.72), rgba(15,26,69,0.55)), url(${HERO_IMG}) center/cover no-repeat`,
        }}
      >
        <div style={{ textAlign: 'center', padding: '0 16px', maxWidth: '800px' }}>
          <p ref={heroSubRef} style={{ opacity: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '20px', fontFamily: 'Lato, sans-serif' }}>
            Campana · Buenos Aires · Argentina
          </p>
          <h1
            ref={heroTitleRef}
            style={{
              opacity: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 800,
              color: 'white', lineHeight: 1.15, marginBottom: '24px',
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            }}
          >
            Tu nueva propiedad<br />
            <em style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }}>te está esperando</em>
          </h1>
          <div ref={heroCtaRef} style={{ opacity: 0, display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link to="/catalogo" className="btn-white" style={{ padding: '14px 32px', fontSize: '0.9rem' }}>
              Ver propiedades
            </Link>
            <Link to="/contacto" style={{
              padding: '14px 32px', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.6)',
              color: 'white', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#1B2A6B', padding: '32px 0' }}>
        <div className="container-max px-4 md:px-8 lg:px-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', textAlign: 'center' }}>
          {[['150+', 'Propiedades vendidas'], ['15+', 'Años de experiencia'], ['400+', 'Clientes satisfechos'], ['98%', 'Satisfacción']].map(([n, l]) => (
            <div key={l}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2rem', color: 'white' }}>{n}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginTop: '4px' }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section ref={whyRef} className="section-padding" style={{ background: '#F8F8F8' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#1B2A6B', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>¿Por qué elegirnos?</p>
            <h2 className="section-title">La diferencia está en<br />la experiencia</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="why-card" style={{
                background: 'white', borderRadius: '20px', padding: '32px 28px',
                boxShadow: '0 2px 20px rgba(27,42,107,0.06)', border: '1px solid rgba(27,42,107,0.06)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(27,42,107,0.14)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 20px rgba(27,42,107,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
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

      {/* ── FEATURED PROPERTIES ── */}
      <section ref={propsRef} className="section-padding" style={{ background: 'white' }}>
        <div className="container-max">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ color: '#1B2A6B', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>Destacadas</p>
              <h2 className="section-title">Propiedades seleccionadas</h2>
            </div>
            <Link to="/catalogo" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1B2A6B', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
              Ver todas <ArrowRight size={16} />
            </Link>
          </div>
          <div ref={propsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {featured.map(p => (
              <div key={p.id} className="prop-card">
                <PropertyCard prop={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section ref={servicesRef} className="section-padding" style={{ background: '#F8F8F8' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#1B2A6B', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>Lo que ofrecemos</p>
            <h2 className="section-title">Nuestros servicios</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="service-card" style={{
                background: 'white', borderRadius: '20px', padding: '36px 28px', textAlign: 'center',
                boxShadow: '0 2px 20px rgba(27,42,107,0.06)', border: '1px solid rgba(27,42,107,0.06)',
                transition: 'all 0.3s', cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1B2A6B'; e.currentTarget.querySelectorAll('*').forEach(el => { if (el.tagName !== 'svg' && el.tagName !== 'path') { el.style.color = 'white' } }); e.currentTarget.querySelector('.svc-icon').style.background = 'rgba(255,255,255,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.querySelectorAll('*').forEach(el => { el.style.color = '' }); e.currentTarget.querySelector('.svc-icon').style.background = '#f0f3ff' }}
              >
                <div className="svc-icon" style={{ width: '60px', height: '60px', borderRadius: '16px', background: '#f0f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Icon size={26} color="#1B2A6B" />
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#1B2A6B', marginBottom: '10px' }}>{title}</h3>
                <p style={{ color: '#8A8A8A', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section ref={testimonialsRef} className="section-padding" style={{ background: 'white' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#1B2A6B', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>Testimonios</p>
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{
                background: '#F8F8F8', borderRadius: '20px', padding: '28px',
                border: '1px solid rgba(27,42,107,0.06)',
              }}>
                <div style={{ display: 'flex', marginBottom: '14px' }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={15} fill="#1B2A6B" stroke="none" />
                  ))}
                </div>
                <p style={{ color: '#444', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '16px' }}>"{t.text}"</p>
                <p style={{ fontWeight: 700, color: '#1B2A6B', fontSize: '0.875rem' }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} style={{ background: '#1B2A6B', padding: '80px 16px', textAlign: 'center' }}>
        <div className="container-max">
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>¿Listo para empezar?</p>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: 'white', fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '20px' }}>
            Encontrá tu próxima propiedad<br />en Campana
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '36px', maxWidth: '500px', margin: '0 auto 36px' }}>
            Hablá con uno de nuestros asesores y te ayudamos a encontrar exactamente lo que buscás.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/5493489599581"
              target="_blank" rel="noreferrer"
              className="btn-white"
              style={{ padding: '14px 32px', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Phone size={16} /> Hablar por WhatsApp
            </a>
            <Link to="/catalogo" style={{
              padding: '14px 32px', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.4)',
              color: 'white', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px',
              transition: 'all 0.3s',
            }}>
              Ver propiedades <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
