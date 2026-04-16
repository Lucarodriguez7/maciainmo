import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Preloader() {
  const preloaderRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(logoRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    )
      .to(preloaderRef.current, {
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          if (preloaderRef.current) preloaderRef.current.style.display = 'none'
        }
      })
  }, [])

  return (
    <div
      ref={preloaderRef}
      style={{
        position: 'fixed', inset: 0,
        background: '#FFFFFF',
        zIndex: 9999,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '16px',
      }}
    >
      <div ref={logoRef} style={{ opacity: 0 }}>
        <img src="/logo.png" alt="Macia Inmobiliaria" style={{ height: '80px', width: 'auto' }} />
      </div>
    </div>
  )
}
