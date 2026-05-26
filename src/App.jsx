import { BrowserRouter, Routes, Route } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Programs from "./components/Programs"
import Transformations from "./components/Transformations"
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import BackgroundEffects from "./components/BackgroundEffects"

import Clients from "./pages/Clients"
import Reviews from "./pages/Reviews"

function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Transformations />
      <Pricing />
      <About />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BackgroundEffects />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App