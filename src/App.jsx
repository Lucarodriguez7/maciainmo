import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Preloader from './components/Preloader/Preloader'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Tasaciones from './pages/Tasaciones'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import PropertyDetail from './pages/PropertyDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/tasaciones" element={<Tasaciones />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/propiedad/:id" element={<PropertyDetail />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}
