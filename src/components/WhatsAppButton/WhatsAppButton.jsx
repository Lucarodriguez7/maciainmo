import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493489599581?text=Hola%2C%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20propiedades."
      target="_blank"
      rel="noreferrer"
      style={{
        position: 'fixed', bottom: '28px', right: '28px', zIndex: 999,
        width: '56px', height: '56px', borderRadius: '50%',
        background: '#25D366',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        color: 'white',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.5)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)' }}
    >
      <MessageCircle size={26} fill="white" stroke="white" />
    </a>
  )
}
