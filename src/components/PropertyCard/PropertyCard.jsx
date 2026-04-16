import { MapPin, Bed, Bath, Maximize2, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function formatPrice(price, currency) {
  if (currency === 'USD') return `USD ${price.toLocaleString('es-AR')}`
  return `$${(price / 1000).toFixed(0)}K/mes`
}

export default function PropertyCard({ prop }) {
  const navigate = useNavigate()
  
  return (
    <div className="property-card" onClick={() => navigate(`/propiedad/${prop.id}`)}>
      {/* Image */}
      <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
        <img src={prop.img} alt={prop.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{
            background: prop.operation === 'Venta' ? '#1B2A6B' : '#2563eb',
            color: 'white', fontSize: '0.65rem', fontWeight: 700,
            padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.1em'
          }}>{prop.operation}</span>
          {prop.isNew && <span style={{ background: '#059669', color: 'white', fontSize: '0.65rem', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase' }}>Nuevo</span>}
          {prop.reduced && <span style={{ background: '#dc2626', color: 'white', fontSize: '0.65rem', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase' }}>Bajó de precio</span>}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#1B2A6B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{prop.type}</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ccc' }} />
          <span style={{ fontSize: '0.65rem', color: '#8A8A8A' }}>{prop.zone}</span>
        </div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1B2A6B', fontSize: '1rem', lineHeight: 1.3, marginBottom: '8px' }}>
          {prop.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8A8A8A', fontSize: '0.8rem', marginBottom: '16px' }}>
          <MapPin size={11} /> {prop.address}
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '16px', paddingTop: '12px', paddingBottom: '12px', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', marginBottom: '16px' }}>
          {prop.beds !== null && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#8A8A8A', fontSize: '0.8rem' }}>
              <Bed size={13} /> {prop.beds} dorm.
            </div>
          )}
          {prop.baths !== null && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#8A8A8A', fontSize: '0.8rem' }}>
              <Bath size={13} /> {prop.baths} baños
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#8A8A8A', fontSize: '0.8rem' }}>
            <Maximize2 size={13} /> {prop.sqm} m²
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#1A1A1A' }}>
            {formatPrice(prop.price, prop.currency)}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1B2A6B', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Ver más <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  )
}
