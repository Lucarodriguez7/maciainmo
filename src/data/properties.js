export const properties = [
  {
    id: 1, type: 'Casa', operation: 'Venta', zone: 'Centro',
    title: 'Casa familiar amplia con jardín y quincho',
    address: 'Mitre 780, Campana',
    beds: 4, baths: 2, sqm: 250, garages: 2,
    price: 195000, currency: 'USD',
    featured: true, isNew: false, reduced: false,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687931-ce8a6c25118c?w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80'
    ],
    desc: 'Hermosa casa en el corazón de Campana. Amplios ambientes, jardín arbolado y quincho ideal para disfrutar en familia. En planta baja encontramos un amplio y muy luminoso living-comedor, cocina semi-integrada totalmente equipada, lavadero independiente y toilette de recepción. Galería semi-cubierta con parrilla, gran jardín y piscina. En planta alta cuenta con dormitorio principal en suite con vestidor, tres dormitorios secundarios con placard y baño completo compatimentado. Dos cocheras cubiertas.',
    amenities: ['Piscina', 'Quincho', 'Parrilla', 'Jardín', 'Calefacción central', 'Aire acondicionado']
  },
  {
    id: 2, type: 'Departamento', operation: 'Venta', zone: 'Río Luján',
    title: 'Departamento moderno con vista al río',
    address: 'Av. Costanera 340, Campana',
    beds: 2, baths: 1, sqm: 72, garages: 1,
    price: 125000, currency: 'USD',
    featured: true, isNew: true, reduced: false,
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80'
    ],
    desc: 'Departamento a estrenar con vista al Río Luján. Cocina integrada, balcón y cochera incluida. Edificio de categoría con amenities de primer nivel. El departamento cuenta con aberturas DVH, pisos de porcelanato y caldera dual. Excelente oportunidad de inversión por su inmejorable ubicación.',
    amenities: ['Balcón', 'SUM', 'Gimnasio', 'Pileta en terraza', 'Seguridad 24hs', 'Cochera subterránea']
  },
  {
    id: 3, type: 'Terreno', operation: 'Venta', zone: 'El Triángulo',
    title: 'Terreno en barrio privado El Triángulo',
    address: 'El Triángulo, Campana',
    beds: null, baths: null, sqm: 600, garages: 0,
    price: 65000, currency: 'USD',
    featured: false, isNew: false, reduced: true,
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80',
      'https://images.unsplash.com/photo-1574516346294-b78be0bef7c6?w=1600&q=80'
    ],
    desc: 'Excelente lote en barrio cerrado con todos los servicios. Ideal para construir tu hogar soñado. Ubicación privilegiada dentro del barrio, lejos del cerco perimetral. El barrio cuenta con áreas deportivas, club house y seguridad.',
    amenities: ['Seguridad 24hs', 'Club House', 'Canchas de Tenis', 'Cancha de Fútbol', 'Red eléctrica subterránea']
  },
  {
    id: 4, type: 'Casa', operation: 'Alquiler', zone: 'Villa Dálmine',
    title: 'Casa en alquiler en Villa Dálmine',
    address: 'Los Aromos 210, Campana',
    beds: 3, baths: 1, sqm: 180, garages: 1,
    price: 450000, currency: 'ARS',
    featured: false, isNew: true, reduced: false,
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80'
    ],
    desc: 'Casa cómoda en barrio tranquilo de Villa Dálmine. Garage, patio y excelente ubicación. Ideal para familias, cerca de colegios y centro comercial.',
    amenities: ['Patio', 'Garage', 'Lavadero', 'Todos los servicios']
  },
  {
    id: 5, type: 'Local', operation: 'Alquiler', zone: 'Centro',
    title: 'Local comercial en zona céntrica',
    address: 'San Martín 520, Campana',
    beds: null, baths: 1, sqm: 120, garages: 0,
    price: 380000, currency: 'ARS',
    featured: true, isNew: false, reduced: false,
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80',
      'https://images.unsplash.com/photo-1582050041567-9cfc280562e8?w=1600&q=80'
    ],
    desc: 'Local estratégico sobre la avenida principal de Campana. Alta visibilidad y tránsito constante. Cuenta con salón principal, privado u oficina, kitchenette y dos baños. Frente completamente vidriado, perciana metálica microperforada y marquesina.',
    amenities: ['Frente vidriado', 'Kitchenette', 'Doble baño', 'Cortina metálica']
  },
  {
    id: 6, type: 'PH', operation: 'Venta', zone: 'Centro',
    title: 'PH con terraza propia y parrilla',
    address: 'Belgrano 430, Campana',
    beds: 3, baths: 2, sqm: 150, garages: 1,
    price: 155000, currency: 'USD',
    featured: false, isNew: true, reduced: false,
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28ce8f25f15?w=1600&q=80',
      'https://images.unsplash.com/photo-1522771804035-91db433157fb?w=1600&q=80'
    ],
    desc: 'PH a estrenar con terraza exclusiva y parrilla. Luminoso, amplio y en inmejorable ubicación. Sin expensas.',
    amenities: ['Terraza', 'Parrilla', 'Sin expensas', 'A estrenar']
  },
  {
    id: 7, type: 'Casa', operation: 'Venta', zone: 'Otamendi',
    title: 'Chalet en Otamendi con parque propio',
    address: 'Otamendi, Campana',
    beds: 3, baths: 2, sqm: 200, garages: 2,
    price: 145000, currency: 'USD',
    featured: false, isNew: false, reduced: true,
    img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1600&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600&q=80'
    ],
    desc: 'Precioso chalet rodeado de naturaleza en Otamendi. Parque de 800m², pileta y quincho.',
    amenities: ['Parque', 'Piscina', 'Quincho', 'Hogar a leña']
  },
  {
    id: 8, type: 'Departamento', operation: 'Alquiler', zone: 'Centro',
    title: 'Monoambiente céntrico ideal para profesionales',
    address: 'Rivadavia 890, Campana',
    beds: 1, baths: 1, sqm: 40, garages: 0,
    price: 280000, currency: 'ARS',
    featured: false, isNew: false, reduced: false,
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&q=80'
    ],
    desc: 'Monoambiente completamente equipado en pleno centro. Ideal para estudiantes o profesionales. Bajas expensas.',
    amenities: ['Amoblado', 'Balcón', 'Aire Ac. Frío/Calor']
  },
  {
    id: 9, type: 'Terreno', operation: 'Venta', zone: 'Lima',
    title: 'Chacra en Lima con acceso al río',
    address: 'Lima, Campana',
    beds: null, baths: null, sqm: 5000, garages: 0,
    price: 85000, currency: 'USD',
    featured: false, isNew: false, reduced: false,
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80'
    ],
    desc: 'Lote de 5000m² en Lima con acceso directo al Río Paraná. Ideal para proyecto rural o recreativo.',
    amenities: ['Acceso al río', 'Arboleda', 'Luz eléctrica']
  },
  {
    id: 10, type: 'Oficina', operation: 'Alquiler', zone: 'Centro',
    title: 'Oficina corporativa en edificio AAA',
    address: 'Av. Rocca 1200, Campana',
    beds: null, baths: 1, sqm: 90, garages: 1,
    price: 520000, currency: 'ARS',
    featured: false, isNew: true, reduced: false,
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80'
    ],
    desc: 'Oficina en edificio premium con seguridad 24hs. Ideal para empresa en expansión. Planta libre muy luminosa.',
    amenities: ['Seguridad 24hs', 'Control de acceso', 'Cochera fija', 'Auditorio común']
  },
  {
    id: 11, type: 'Casa', operation: 'Venta', zone: 'Río Luján',
    title: 'Casa náutica frente al Río Luján',
    address: 'Costanera Norte 45, Campana',
    beds: 4, baths: 3, sqm: 320, garages: 2,
    price: 320000, currency: 'USD',
    featured: true, isNew: false, reduced: false,
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80'
    ],
    desc: 'Imponente propiedad frente al río con amarre privado. Diseño náutico único con pileta y deck.',
    amenities: ['Amarre propio', 'Pileta con diseño fin', 'Deck al río', 'Dependencia de servicio']
  },
  {
    id: 12, type: 'Departamento', operation: 'Venta', zone: 'Zárate',
    title: 'Departamento en Zárate a metros del centro',
    address: 'Italia 340, Zárate',
    beds: 2, baths: 1, sqm: 65, garages: 1,
    price: 98000, currency: 'USD',
    featured: false, isNew: true, reduced: false,
    img: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560185008-b033106af5c3?w=1600&q=80',
      'https://images.unsplash.com/photo-1552564883-9bc6449175f0?w=1600&q=80'
    ],
    desc: 'Moderno departamento en Zárate, a minutos del centro. Excelente estado y muy luminoso. Balcón al frente.',
    amenities: ['Balcón al frente', 'Caldera propia', 'Cochera descubierta']
  },
]

export const TYPES = ['Casa', 'Departamento', 'PH', 'Local', 'Terreno', 'Oficina']
export const OPERATIONS = ['Venta', 'Alquiler', 'Alquiler Temporal']
export const ZONES = ['Centro', 'Río Luján', 'El Triángulo', 'Villa Dálmine', 'Otamendi', 'Zárate', 'Lima']
