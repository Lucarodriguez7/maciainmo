import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { MapPin, Bed, Bath, Maximize2, Check, ArrowLeft, Image as ImageIcon, X, Phone, MessageCircle, ChevronLeft, ChevronRight, Share2 } from 'lucide-react'
import { gsap } from 'gsap'
import { properties } from '../data/properties'
import PropertyCard from '../components/PropertyCard/PropertyCard'

function formatPrice(price, currency) {
  if (currency === 'USD') return `USD ${price.toLocaleString('es-AR')}`
  return `$${(price / 1000).toFixed(0)}K/mes`
}

export default function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = properties.find(p => p.id === parseInt(id))
  
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const heroRef = useRef(null)
  
  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.fromTo('.anim-fade-up', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    )
  }, [id])

  if (!property) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F8F8F8' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#1B2A6B', marginBottom: '16px' }}>Propiedad no encontrada</h2>
        <button onClick={() => navigate('/catalogo')} className="btn-primary">Volver al catálogo</button>
      </div>
    )
  }

  const similarProperties = properties
    .filter(p => p.id !== property.id && (p.type === property.type || p.zone === property.zone))
    .slice(0, 3)

  const handleNextImg = (e) => {
    e.stopPropagation()
    setActiveImageIndex(p => (p + 1) % property.images.length)
  }

  const handlePrevImg = (e) => {
    e.stopPropagation()
    setActiveImageIndex(p => (p === 0 ? property.images.length - 1 : p - 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main style={{ background: '#F8F8F8', paddingBottom: '80px' }}>
      {/* Header Spacer since Navbar is fixed */}
      <div style={{ height: '90px', background: '#1B2A6B' }}></div>
      
      {/* Breadcrumb & Navigation */}
      <div className="container-max" style={{ padding: '20px 16px' }}>
        <button onClick={() => navigate(-1)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#8A8A8A', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Lato, sans-serif', fontSize: '0.9rem', transition: 'color 0.2s', padding: 0 }}
          onMouseEnter={e => e.currentTarget.style.color = '#1B2A6B'}
          onMouseLeave={e => e.currentTarget.style.color = '#8A8A8A'}
        >
          <ArrowLeft size={16} /> Volver
        </button>
      </div>

      {/* Hero Image Section */}
      <section className="container-max" style={{ padding: '0 16px' }}>
        <div className="anim-fade-up" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', height: '500px', borderRadius: '24px', overflow: 'hidden', position: 'relative' }}>
          {/* Main Image */}
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => { setActiveImageIndex(0); setModalOpen(true); }}>
            <img src={property.images[0]} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '8px' }}>
              <span style={{ background: property.operation === 'Venta' ? '#1B2A6B' : '#2563eb', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {property.operation}
              </span>
            </div>
            {/* Gallery Overlay Info */}
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', gap: '8px' }}>
              <div style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', color: 'white', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ImageIcon size={16} /> Ver galería completa (1/{property.images.length})
              </div>
            </div>
          </div>
          
          {/* Side Images */}
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '16px' }} className="hidden md:grid">
            {property.images[1] && (
              <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => { setActiveImageIndex(1); setModalOpen(true); }}>
                <img src={property.images[1]} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 24px 0 0' }} />
              </div>
            )}
            {property.images[2] && (
              <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => { setActiveImageIndex(2); setModalOpen(true); }}>
                <img src={property.images[2]} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 0 24px 0' }} />
                {property.images.length > 3 && (
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', borderRadius: '0 0 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'white', fontWeight: 700, fontSize: '1.2rem' }}>+{property.images.length - 3}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-max" style={{ padding: '40px 16px', display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
        
        {/* Left Column - Details */}
        <div style={{ flex: '1 1 600px' }}>
          <div className="anim-fade-up">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1B2A6B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{property.type}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ccc' }} />
                  <span style={{ fontSize: '0.75rem', color: '#8A8A8A' }}>Ref: MAC-{property.id.toString().padStart(4, '0')}</span>
                </div>
                <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1A1A1A', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                  {property.title}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8A8A8A', fontSize: '1rem', marginBottom: '24px' }}>
                  <MapPin size={16} color="#1B2A6B" /> {property.address}, {property.zone}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.4rem', color: '#1B2A6B', lineHeight: 1 }}>
                  {formatPrice(property.price, property.currency)}
                </p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '16px' }}>
                  <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
                    <Share2 size={18} color="#1B2A6B" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats Banner */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', background: 'white', border: '1px solid #f0f0f0', borderRadius: '20px', padding: '24px', marginBottom: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              {property.beds !== null && (
                <div style={{ flex: '1 1 80px', textAlign: 'center', borderRight: '1px solid #f0f0f0' }}>
                  <Bed size={24} color="#8A8A8A" style={{ margin: '0 auto 8px' }} />
                  <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>{property.beds}</p>
                  <p style={{ fontSize: '0.8rem', color: '#8A8A8A' }}>Dormitorios</p>
                </div>
              )}
              {property.baths !== null && (
                <div style={{ flex: '1 1 80px', textAlign: 'center', borderRight: '1px solid #f0f0f0' }}>
                  <Bath size={24} color="#8A8A8A" style={{ margin: '0 auto 8px' }} />
                  <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>{property.baths}</p>
                  <p style={{ fontSize: '0.8rem', color: '#8A8A8A' }}>Baños</p>
                </div>
              )}
              <div style={{ flex: '1 1 80px', textAlign: 'center', borderRight: property.garages !== null ? '1px solid #f0f0f0' : 'none' }}>
                <Maximize2 size={24} color="#8A8A8A" style={{ margin: '0 auto 8px' }} />
                <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>{property.sqm}</p>
                <p style={{ fontSize: '0.8rem', color: '#8A8A8A' }}>Superficie (m²)</p>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#1B2A6B', marginBottom: '16px' }}>Descripción</h2>
              <p style={{ color: '#444', fontSize: '1rem', lineHeight: 1.8, whiteSpace: 'pre-line', fontFamily: 'Lato, sans-serif' }}>
                {property.desc}
              </p>
            </div>

            {/* Amenities */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#1B2A6B', marginBottom: '20px' }}>Características y Amenities</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                {property.amenities.map(amenity => (
                  <div key={amenity} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f0f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Check size={14} color="#1B2A6B" />
                    </div>
                    <span style={{ fontSize: '0.95rem', color: '#444' }}>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#1B2A6B', marginBottom: '20px' }}>Ubicación</h2>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '350px', background: '#e5e7eb' }}>
                <iframe
                  title="Mapa Propiedad"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26480!2d-58.9571!3d-34.1669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba6b0b6b9f9b4d%3A0x1234!2s${encodeURIComponent(property.address)}!5e0!3m2!1ses!2sar!4v1234567890`}
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sticky Contact Card */}
        <div style={{ flex: '1 1 350px', position: 'relative' }}>
          <div className="anim-fade-up" style={{ position: 'sticky', top: '100px', background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 30px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#1B2A6B', marginBottom: '8px' }}>¿Te interesa esta propiedad?</h3>
            <p style={{ color: '#8A8A8A', fontSize: '0.9rem', marginBottom: '24px' }}>Contactanos para coordinar una visita o hacer una consulta.</p>
            
            <a href={`https://wa.me/5493489599581?text=${encodeURIComponent(`Hola Macia, me interesa la propiedad REF: MAC-${property.id.toString().padStart(4, '0')} (${property.title}). Me gustaría recibir más información.`)}`} 
               target="_blank" rel="noreferrer"
               style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: 'white', padding: '16px', borderRadius: '14px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.3s', marginBottom: '24px' }}
               onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.35)' }}
               onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <MessageCircle size={20} /> Hablar por WhatsApp
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ flex: 1, height: '1px', background: '#f0f0f0' }}></div>
              <span style={{ fontSize: '0.8rem', color: '#8A8A8A', textTransform: 'uppercase', letterSpacing: '0.1em' }}>O dejá tu consulta</span>
              <div style={{ flex: 1, height: '1px', background: '#f0f0f0' }}></div>
            </div>

            {sent ? (
              <div style={{ background: '#f0f3ff', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
                <Check size={40} color="#1B2A6B" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontFamily: 'Poppins, sans-serif', color: '#1B2A6B', marginBottom: '4px' }}>Consulta enviada</h4>
                <p style={{ fontSize: '0.85rem', color: '#444' }}>Te responderemos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input className="form-input" style={{ padding: '12px 16px', fontSize: '0.9rem' }} placeholder="Nombre completo" required value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} />
                <input className="form-input" style={{ padding: '12px 16px', fontSize: '0.9rem' }} type="email" placeholder="Email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                <input className="form-input" style={{ padding: '12px 16px', fontSize: '0.9rem' }} placeholder="Teléfono" required value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})} />
                <textarea className="form-input" style={{ padding: '12px 16px', fontSize: '0.9rem', resize: 'vertical' }} rows={3} placeholder="Me gustaría saber más sobre la propiedad..." required value={form.mensaje} onChange={e => setForm({...form, mensaje: e.target.value})} />
                <button type="submit" className="btn-primary" style={{ padding: '14px', fontSize: '0.95rem', marginTop: '8px' }}>
                  Consultar ahora
                </button>
              </form>
            )}

            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #f0f0f0', textAlign: 'center' }}>
              <p style={{ fontSize: '0.85rem', color: '#8A8A8A', marginBottom: '8px' }}>Llamanos directamente</p>
              <a href="tel:+5493489599581" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1B2A6B', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
                <Phone size={18} /> +54 9 3489 59-9581
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Tasacion Banner */}
      <section className="container-max" style={{ padding: '0 16px', marginBottom: '60px' }}>
        <div className="anim-fade-up" style={{ background: 'linear-gradient(135deg, #1B2A6B 0%, #243580 100%)', borderRadius: '24px', padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', transform: 'scale(1.5)' }} />
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, marginBottom: '16px', position: 'relative', zIndex: 1 }}>
            ¿Buscás vender o alquilar tu propiedad?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: '500px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
            Te ofrecemos una valuación gratuita y profesional para que conozcas el valor real de tu inmueble.
          </p>
          <Link to="/tasaciones" className="btn-white" style={{ position: 'relative', zIndex: 1, padding: '14px 32px' }}>
            Consultá sobre tu tasación
          </Link>
        </div>
      </section>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <section className="container-max" style={{ padding: '40px 16px' }}>
          <div className="anim-fade-up" style={{ marginBottom: '32px' }}>
            <p style={{ color: '#1B2A6B', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>Opciones similares</p>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, color: '#1B2A6B' }}>Te puede interesar</h2>
          </div>
          <div className="anim-fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {similarProperties.map(p => (
              <PropertyCard key={p.id} prop={p} />
            ))}
          </div>
        </section>
      )}

      {/* Gallery Modal */}
      {modalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.95)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '8px' }}>
              <X size={32} />
            </button>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '0 60px' }}>
            <img src={property.images[activeImageIndex]} alt="Gallery Modal" style={{ maxHeight: '90vh', maxWidth: '100%', objectFit: 'contain' }} />
            
            <button onClick={handlePrevImg} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', hover: { background: 'rgba(255,255,255,0.2)' } }}>
              <ChevronLeft size={32} />
            </button>
            <button onClick={handleNextImg} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', hover: { background: 'rgba(255,255,255,0.2)' } }}>
              <ChevronRight size={32} />
            </button>
          </div>
          <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
            {property.images.map((_, idx) => (
              <button key={idx} onClick={() => setActiveImageIndex(idx)} style={{ width: '10px', height: '10px', borderRadius: '50%', background: activeImageIndex === idx ? 'white' : 'rgba(255,255,255,0.3)', border: 'none', cursor: 'pointer', padding: 0 }} />
            ))}
          </div>
        </div>
      )}

    </main>
  )
}
