import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, ClipboardList, FileCheck, Phone, CheckCircle, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { icon: ClipboardList, step: '01', title: 'Completá el formulario', desc: 'Ingresá los datos de tu propiedad: tipo, superficie, ubicación y características principales.' },
  { icon: TrendingUp, step: '02', title: 'Analizamos el mercado', desc: 'Nuestros expertos analizan las condiciones actuales del mercado inmobiliario de Campana.' },
  { icon: FileCheck, step: '03', title: 'Recibís la valuación', desc: 'Te enviamos un informe detallado con el valor estimado de tu propiedad y las condiciones del mercado.' },
]

const reasons = [
  'Más de 15 años de experiencia en el mercado local',
  'Conocimiento profundo de Campana y la región',
  'Análisis basado en operaciones reales y actualizadas',
  'Informe detallado sin costo ni compromiso',
  'Asesoramiento personalizado post-tasación',
  'Atención rápida: respuesta en 24 a 48 horas',
]

export default function Tasaciones() {
  const heroRef = useRef(null)
  const stepsRef = useRef(null)
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', direccion: '', tipo: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    gsap.fromTo(heroRef.current?.querySelectorAll('.hero-item'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
    )
    gsap.fromTo(stepsRef.current?.querySelectorAll('.step-card'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: stepsRef.current, start: 'top 80%' } }
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} style={{ background: `linear-gradient(rgba(15,26,69,0.8), rgba(15,26,69,0.7)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80) center/cover`, padding: '140px 16px 80px', textAlign: 'center' }}>
        <div className="container-max">
          <p className="hero-item" style={{ opacity: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px' }}>Servicio gratuito</p>
          <h1 className="hero-item" style={{ opacity: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px' }}>
            Tasá tu propiedad<br /><em>sin costo ni compromiso</em>
          </h1>
          <p className="hero-item" style={{ opacity: 0, color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Conocé el valor real de tu inmueble con una valuación profesional basada en el mercado actual de Campana.
          </p>
          <a className="hero-item btn-white" href="#formulario" style={{ opacity: 0, display: 'inline-block', padding: '14px 32px' }}>
            Solicitar tasación gratis
          </a>
        </div>
      </section>

      {/* Steps */}
      <section ref={stepsRef} style={{ background: '#F8F8F8', padding: '80px 16px' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#1B2A6B', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>Proceso simple</p>
            <h2 className="section-title">¿Cómo funciona?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {steps.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="step-card" style={{ background: 'white', borderRadius: '20px', padding: '36px 28px', boxShadow: '0 2px 20px rgba(27,42,107,0.06)', border: '1px solid rgba(27,42,107,0.06)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: 'rgba(27,42,107,0.07)' }}>{step}</span>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: '#f0f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Icon size={24} color="#1B2A6B" />
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1B2A6B', fontSize: '1.05rem', marginBottom: '10px' }}>{title}</h3>
                <p style={{ color: '#8A8A8A', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Reasons */}
      <section id="formulario" style={{ background: 'white', padding: '80px 16px' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
          {/* Form */}
          <div>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>Solicitá tu tasación</h2>
            <p style={{ color: '#8A8A8A', fontSize: '0.9rem', marginBottom: '32px' }}>Completá el formulario y nos contactamos en menos de 24 horas.</p>
            {sent ? (
              <div style={{ background: '#f0f3ff', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
                <CheckCircle size={48} color="#1B2A6B" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#1B2A6B', marginBottom: '8px' }}>¡Solicitud recibida!</h3>
                <p style={{ color: '#8A8A8A', fontSize: '0.9rem' }}>Te contactamos en las próximas 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input className="form-input" placeholder="Tu nombre completo" required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
                <input className="form-input" placeholder="Teléfono / WhatsApp" required value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} />
                <input className="form-input" type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                <input className="form-input" placeholder="Dirección de la propiedad" required value={form.direccion} onChange={e => setForm({ ...form, direccion: e.target.value })} />
                <select className="form-input" required value={form.tipo} onChange={e => setForm({ ...form, tipo: e.target.value })}>
                  <option value="">Tipo de propiedad</option>
                  {['Casa', 'Departamento', 'PH', 'Local', 'Terreno', 'Oficina'].map(t => <option key={t}>{t}</option>)}
                </select>
                <textarea className="form-input" placeholder="Información adicional (superficie, ambientes, estado...)" rows={4} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} style={{ resize: 'vertical' }} />
                <button type="submit" className="btn-primary" style={{ padding: '14px', fontSize: '0.95rem' }}>
                  Solicitar tasación gratuita
                </button>
                <p style={{ fontSize: '0.75rem', color: '#8A8A8A', textAlign: 'center' }}>O escribinos por <a href="https://wa.me/5493489599581" target="_blank" rel="noreferrer" style={{ color: '#1B2A6B', fontWeight: 600 }}>WhatsApp</a></p>
              </form>
            )}
          </div>

          {/* Reasons */}
          <div>
            <div style={{ background: '#F8F8F8', borderRadius: '20px', padding: '36px' }}>
              <div style={{ display: 'flex', marginBottom: '6px' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#1B2A6B" stroke="none" />)}
              </div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1B2A6B', fontSize: '1.2rem', marginBottom: '24px' }}>¿Por qué tasar con Macia?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {reasons.map(r => (
                  <div key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={16} color="#1B2A6B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#444', fontSize: '0.875rem', lineHeight: 1.6 }}>{r}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
                <p style={{ color: '#8A8A8A', fontSize: '0.8rem', marginBottom: '8px' }}>¿Preferís hablar directo?</p>
                <a href="tel:+5493489599581" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1B2A6B', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
                  <Phone size={16} /> +54 9 3489 59-9581
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
