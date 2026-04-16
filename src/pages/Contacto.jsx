import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock, CheckCircle } from 'lucide-react'

export default function Contacto() {
  const heroRef = useRef(null)
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    gsap.fromTo(heroRef.current?.querySelectorAll('.hero-item'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const contactInfo = [
    { icon: Phone, label: 'Teléfono', value: '+54 9 3489 59-9581', href: 'tel:+5493489599581' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+54 9 3489 59-9581', href: 'https://wa.me/5493489599581' },
    { icon: Mail, label: 'Email', value: 'info@maciainmobiliaria.com.ar', href: 'mailto:info@maciainmobiliaria.com.ar' },
    { icon: MapPin, label: 'Dirección', value: 'San Martín 450, Campana, Buenos Aires', href: 'https://maps.google.com/?q=Campana+Buenos+Aires' },
    { icon: Instagram, label: 'Instagram', value: '@macia.inmobiliaria', href: 'https://instagram.com/macia.inmobiliaria' },
    { icon: Clock, label: 'Horario', value: 'Lun a Vie 9:00 - 18:00 | Sáb 9:00 - 13:00', href: null },
  ]

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} style={{
        background: `linear-gradient(rgba(15,26,69,0.8), rgba(15,26,69,0.7)), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80) center/cover`,
        padding: '140px 16px 80px', textAlign: 'center'
      }}>
        <div className="container-max">
          <p className="hero-item" style={{ opacity: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Estamos para ayudarte
          </p>
          <h1 className="hero-item" style={{ opacity: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px' }}>
            Hablemos sobre<br /><em>tu próxima propiedad</em>
          </h1>
          <p className="hero-item" style={{ opacity: 0, color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Nuestro equipo está listo para asesorarte en cada paso del proceso.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section style={{ background: '#F8F8F8', padding: '80px 16px' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>

          {/* Form */}
          <div>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>Envianos un mensaje</h2>
            <p style={{ color: '#8A8A8A', fontSize: '0.9rem', marginBottom: '32px' }}>Te respondemos en menos de 24 horas hábiles.</p>
            {sent ? (
              <div style={{ background: 'white', borderRadius: '20px', padding: '40px', textAlign: 'center', boxShadow: '0 2px 20px rgba(27,42,107,0.06)' }}>
                <CheckCircle size={52} color="#1B2A6B" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#1B2A6B', fontSize: '1.2rem', marginBottom: '8px' }}>¡Mensaje enviado!</h3>
                <p style={{ color: '#8A8A8A', fontSize: '0.9rem' }}>Nos ponemos en contacto muy pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'white', borderRadius: '20px', padding: '32px', boxShadow: '0 2px 20px rgba(27,42,107,0.06)' }}>
                <input className="form-input" placeholder="Tu nombre completo" required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
                <input className="form-input" placeholder="Teléfono / WhatsApp" required value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} />
                <input className="form-input" type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                <textarea className="form-input" placeholder="¿En qué podemos ayudarte?" rows={5} required value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} style={{ resize: 'vertical' }} />
                <button type="submit" className="btn-primary" style={{ padding: '14px', fontSize: '0.95rem' }}>
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: '8px' }}>Información de contacto</h2>
              <p style={{ color: '#8A8A8A', fontSize: '0.9rem', marginBottom: '28px' }}>Encontranos por el medio que prefieras.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'white', borderRadius: '14px', padding: '18px 20px', boxShadow: '0 2px 12px rgba(27,42,107,0.05)', border: '1px solid rgba(27,42,107,0.05)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f0f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color="#1B2A6B" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#8A8A8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                        style={{ color: '#1B2A6B', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                        {value}
                      </a>
                    ) : (
                      <p style={{ color: '#1A1A1A', fontWeight: 500, fontSize: '0.875rem' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5493489599581?text=Hola%2C%20me%20gustaría%20obtener%20información%20sobre%20propiedades."
              target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: 'white', padding: '16px', borderRadius: '14px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <MessageCircle size={20} fill="white" stroke="white" />
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: 'white', padding: '0' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26480!2d-58.9571!3d-34.1669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba6b0b6b9f9b4d%3A0x1234!2sCampana%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890"
          width="100%" height="400" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Campana"
        />
      </section>
    </main>
  )
}
