import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Services } from './components/services'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import './App.css'

function HRLandingPage() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-50'>
      <Navbar />
      <main className='flex-1 mt-16'>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return <HRLandingPage />
}

export default App
