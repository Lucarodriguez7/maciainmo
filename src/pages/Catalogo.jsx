import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, X, Grid3X3, List, ArrowUpDown, MapPin, ChevronDown } from 'lucide-react'
import PropertyCard from '../components/PropertyCard/PropertyCard'
import { properties, TYPES, OPERATIONS, ZONES } from '../data/properties'

const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevancia' },
  { value: 'price-asc', label: 'Menor precio' },
  { value: 'price-desc', label: 'Mayor precio' },
  { value: 'sqm-desc', label: 'Mayor superficie' },
]

function Chip({ label, active, onClick, icon: Icon }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: '6px',
      padding: '8px 16px', borderRadius: '20px', border: '1.5px solid',
      borderColor: active ? '#1B2A6B' : '#e5e7eb',
      background: active ? '#1B2A6B' : 'white',
      color: active ? 'white' : '#1A1A1A',
      fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
      whiteSpace: 'nowrap', transition: 'all 0.2s',
    }}>
      {Icon && <Icon size={11} />}{label}
    </button>
  )
}

export default function Catalogo() {
  const [search, setSearch] = useState('')
  const [ops, setOps] = useState([])
  const [types, setTypes] = useState([])
  const [zones, setZones] = useState([])
  const [maxPrice, setMaxPrice] = useState(500000)
  const [minBeds, setMinBeds] = useState(0)
  const [minSqm, setMinSqm] = useState(0)
  const [sortBy, setSortBy] = useState('relevance')
  const [viewMode, setViewMode] = useState('grid')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const toggle = (arr, setArr, val) => setArr(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val])

  const filtered = useMemo(() => {
    let list = properties.filter(p => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.address.toLowerCase().includes(search.toLowerCase())) return false
      if (ops.length && !ops.includes(p.operation)) return false
      if (types.length && !types.includes(p.type)) return false
      if (zones.length && !zones.includes(p.zone)) return false
      if (p.currency === 'USD' && p.price > maxPrice) return false
      if (minBeds > 0 && (p.beds === null || p.beds < minBeds)) return false
      if (minSqm > 0 && p.sqm < minSqm) return false
      return true
    })
    switch (sortBy) {
      case 'price-asc': return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc': return [...list].sort((a, b) => b.price - a.price)
      case 'sqm-desc': return [...list].sort((a, b) => b.sqm - a.sqm)
      default: return [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
  }, [search, ops, types, zones, maxPrice, minBeds, minSqm, sortBy])

  const activeCount = ops.length + types.length + zones.length + (maxPrice < 500000 ? 1 : 0) + (minBeds > 0 ? 1 : 0) + (minSqm > 0 ? 1 : 0)

  const clearAll = () => { setOps([]); setTypes([]); setZones([]); setMaxPrice(500000); setMinBeds(0); setMinSqm(0); setSearch('') }

  const FilterPanel = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Operación */}
      <div>
        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A8A8A', marginBottom: '12px' }}>Operación</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {OPERATIONS.map(op => (
            <label key={op} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={ops.includes(op)} onChange={() => toggle(ops, setOps, op)}
                style={{ accentColor: '#1B2A6B', width: '16px', height: '16px' }} />
              <span style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>{op}</span>
            </label>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid #f0f0f0' }} />
      {/* Tipo */}
      <div>
        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A8A8A', marginBottom: '12px' }}>Tipo de propiedad</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {TYPES.map(t => (
            <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={types.includes(t)} onChange={() => toggle(types, setTypes, t)}
                style={{ accentColor: '#1B2A6B', width: '16px', height: '16px' }} />
              <span style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>{t}</span>
            </label>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid #f0f0f0' }} />
      {/* Zona */}
      <div>
        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A8A8A', marginBottom: '12px' }}>Zona</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {ZONES.map(z => (
            <label key={z} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={zones.includes(z)} onChange={() => toggle(zones, setZones, z)}
                style={{ accentColor: '#1B2A6B', width: '16px', height: '16px' }} />
              <span style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>{z}</span>
            </label>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid #f0f0f0' }} />
      {/* Precio */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A8A8A' }}>Precio máx. (USD)</p>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1B2A6B' }}>USD {(maxPrice / 1000).toFixed(0)}K</span>
        </div>
        <input type="range" min={50000} max={500000} step={10000} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}
          style={{ width: '100%', background: `linear-gradient(to right, #1B2A6B 0%, #1B2A6B ${((maxPrice - 50000) / 450000) * 100}%, #e5e7eb ${((maxPrice - 50000) / 450000) * 100}%, #e5e7eb 100%)` }}
        />
      </div>
      {/* Dormitorios */}
      <div>
        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A8A8A', marginBottom: '12px' }}>Dormitorios mínimos</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[0, 1, 2, 3, 4].map(n => (
            <button key={n} onClick={() => setMinBeds(n)} style={{
              width: '36px', height: '36px', borderRadius: '10px', border: '1.5px solid',
              borderColor: minBeds === n ? '#1B2A6B' : '#e5e7eb',
              background: minBeds === n ? '#1B2A6B' : 'white',
              color: minBeds === n ? 'white' : '#1A1A1A',
              fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
            }}>
              {n === 0 ? 'T' : n}
            </button>
          ))}
        </div>
      </div>
      {/* Superficie */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A8A8A' }}>Superficie mín.</p>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1B2A6B' }}>{minSqm} m²</span>
        </div>
        <input type="range" min={0} max={600} step={20} value={minSqm} onChange={e => setMinSqm(Number(e.target.value))}
          style={{ width: '100%', background: `linear-gradient(to right, #1B2A6B 0%, #1B2A6B ${(minSqm / 600) * 100}%, #e5e7eb ${(minSqm / 600) * 100}%, #e5e7eb 100%)` }}
        />
      </div>
      {activeCount > 0 && (
        <button onClick={clearAll} style={{
          width: '100%', padding: '10px', borderRadius: '10px', border: '1.5px solid #dc2626',
          color: '#dc2626', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', background: 'white',
        }}>
          Limpiar filtros ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div style={{ background: '#F8F8F8', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: '#1B2A6B', padding: '100px 16px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05), transparent 60%)' }} />
        <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Catálogo completo</p>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: 'white', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '6px' }}>
            Propiedades en Campana
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem' }}>{properties.length} propiedades disponibles</p>
        </div>
      </div>

      {/* Search + controls */}
      <div style={{ background: 'white', borderBottom: '1px solid #f0f0f0', position: 'sticky', top: '70px', zIndex: 100, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <div className="container-max px-4 md:px-8 lg:px-16" style={{ padding: '12px 16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#8A8A8A' }} />
            <input
              type="text" placeholder="Buscar por barrio, título..." value={search}
              onChange={e => setSearch(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '42px', paddingRight: search ? '42px' : '14px' }}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#8A8A8A' }}>
                <X size={14} />
              </button>
            )}
          </div>
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden flex items-center btn-primary" style={{ gap: '6px', padding: '10px 16px', fontSize: '0.8rem', flexShrink: 0, position: 'relative' }}>
            <SlidersHorizontal size={14} /> Filtros
            {activeCount > 0 && <span style={{ position: 'absolute', top: '-6px', right: '-6px', width: '18px', height: '18px', borderRadius: '50%', background: '#dc2626', color: 'white', fontSize: '0.65rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{activeCount}</span>}
          </button>
          <div style={{ gap: '8px', alignItems: 'center', flexShrink: 0 }} className="hidden lg:flex">
            <div style={{ position: 'relative' }}>
              <button onClick={() => setSortOpen(v => !v)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderRadius: '10px', border: '1.5px solid #e5e7eb', background: 'white', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>
                <ArrowUpDown size={13} /> {SORT_OPTIONS.find(s => s.value === sortBy)?.label} <ChevronDown size={12} />
              </button>
              {sortOpen && (
                <div style={{ position: 'absolute', right: 0, top: 'calc(100% + 6px)', background: 'white', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #f0f0f0', overflow: 'hidden', zIndex: 50, minWidth: '160px' }}>
                  {SORT_OPTIONS.map(o => (
                    <button key={o.value} onClick={() => { setSortBy(o.value); setSortOpen(false) }}
                      style={{ width: '100%', textAlign: 'left', padding: '10px 16px', fontSize: '0.82rem', fontWeight: sortBy === o.value ? 700 : 500, color: sortBy === o.value ? '#1B2A6B' : '#1A1A1A', background: 'none', border: 'none', cursor: 'pointer' }}>
                      {o.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', border: '1.5px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
              <button onClick={() => setViewMode('grid')} style={{ padding: '10px', background: viewMode === 'grid' ? '#1B2A6B' : 'white', color: viewMode === 'grid' ? 'white' : '#8A8A8A', border: 'none', cursor: 'pointer' }}><Grid3X3 size={15} /></button>
              <button onClick={() => setViewMode('list')} style={{ padding: '10px', background: viewMode === 'list' ? '#1B2A6B' : 'white', color: viewMode === 'list' ? 'white' : '#8A8A8A', border: 'none', cursor: 'pointer' }}><List size={15} /></button>
            </div>
          </div>
        </div>
        {/* Chips */}
        <div style={{ padding: '0 16px 12px', display: 'flex', gap: '8px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {OPERATIONS.map(op => <Chip key={op} label={op} active={ops.includes(op)} onClick={() => toggle(ops, setOps, op)} />)}
          <div style={{ width: '1px', background: '#e5e7eb', flexShrink: 0 }} />
          {ZONES.map(z => <Chip key={z} label={z} active={zones.includes(z)} onClick={() => toggle(zones, setZones, z)} icon={MapPin} />)}
          <div style={{ width: '1px', background: '#e5e7eb', flexShrink: 0 }} />
          {TYPES.map(t => <Chip key={t} label={t} active={types.includes(t)} onClick={() => toggle(types, setTypes, t)} />)}
        </div>
      </div>

      {/* Layout */}
      <div className="container-max px-4 md:px-8 lg:px-16" style={{ padding: '32px 16px', display: 'flex', gap: '32px' }}>
        {/* Sidebar desktop */}
        <aside style={{ width: '260px', flexShrink: 0 }} className="hidden lg:block">
          <div style={{ background: 'white', borderRadius: '20px', padding: '24px', position: 'sticky', top: '180px', boxShadow: '0 2px 20px rgba(27,42,107,0.06)', border: '1px solid rgba(27,42,107,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1B2A6B' }}>Filtros</span>
              {activeCount > 0 && <button onClick={clearAll} style={{ fontSize: '0.72rem', color: '#dc2626', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}>Limpiar ({activeCount})</button>}
            </div>
            <FilterPanel />
          </div>
        </aside>

        {/* Results */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: '#1A1A1A' }}>{filtered.length}</span>
            <span style={{ color: '#8A8A8A', fontSize: '0.875rem', marginLeft: '6px' }}>{filtered.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}</span>
          </div>

          {filtered.length === 0 ? (
            <div style={{ background: 'white', borderRadius: '20px', padding: '64px', textAlign: 'center' }}>
              <Search size={40} color="#e5e7eb" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#1B2A6B', fontSize: '1.2rem', marginBottom: '8px' }}>Sin resultados</h3>
              <p style={{ color: '#8A8A8A', fontSize: '0.875rem', marginBottom: '24px' }}>Probá con otros filtros.</p>
              <button onClick={clearAll} className="btn-primary">Limpiar filtros</button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(290px, 1fr))' : '1fr', gap: '20px' }}>
              {filtered.map(p => <PropertyCard key={p.id} prop={p} />)}
            </div>
          )}
        </div>
      </div>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 500 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} onClick={() => setSidebarOpen(false)} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'white', borderRadius: '24px 24px 0 0', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ padding: '20px 20px 12px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
              <span style={{ fontWeight: 700, fontSize: '1rem', color: '#1B2A6B' }}>Filtros avanzados</span>
              <button onClick={() => setSidebarOpen(false)} style={{ background: '#f5f5f5', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X size={16} /></button>
            </div>
            <div style={{ padding: '20px' }}>
              <FilterPanel />
              <button onClick={() => setSidebarOpen(false)} className="btn-primary" style={{ width: '100%', marginTop: '20px', padding: '14px' }}>
                Ver {filtered.length} propiedades
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
