import { useState, useEffect, useCallback, Dispatch } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/button'
import { Users, Menu, X } from 'lucide-react'

const NAV_LINKS = [`About`, `Services`, `Contact`]

function NavLinks({
  setIsMobileMenuOpen,
}: {
  setIsMobileMenuOpen?: Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div
      className='contents'
      onClick={() => {
        setIsMobileMenuOpen?.(false)
      }}
    >
      {NAV_LINKS.map(link => (
        <a
          key={link}
          className='transition-colors hover:text-blue-400'
          href={`#${link.toLowerCase()}`}
        >
          {link}
        </a>
      ))}
    </div>
  )
}

export function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY
    setIsNavbarVisible(currentScrollY < lastScrollY)
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  useEffect(() => {
    window.addEventListener(`scroll`, controlNavbar)
    return () => {
      window.removeEventListener(`scroll`, controlNavbar)
    }
  }, [controlNavbar])

  return (
    <>
      <header
        className='fixed top-0 right-0 left-0 z-50 bg-slate-900 text-white transition-transform duration-300 ease-in-out'
        style={{
          transform: isNavbarVisible ? `translateY(0)` : `translateY(-100%)`,
        }}
      >
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <a href='/' className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center'>
                <Users className='h-5 w-5 text-white' />
              </div>
              <span className='font-bold text-lg'>HR Solutions</span>
            </a>
            <nav className='hidden md:flex items-center space-x-6 text-sm font-medium'>
              <NavLinks />
            </nav>
            <div className='flex items-center space-x-4'>
              <Button className='bg-blue-600 text-white hover:bg-blue-700 hidden md:inline-flex'>
                Get Started
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='md:hidden'
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className='h-6 w-6' />
                ) : (
                  <Menu className='h-6 w-6' />
                )}
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='md:hidden fixed inset-x-0 top-16 bg-slate-900 text-white z-40'
          >
            <nav className='flex flex-col items-center space-y-4 py-4'>
              <NavLinks {...{ setIsMobileMenuOpen }} />
              <Button className='bg-blue-600 text-white hover:bg-blue-700 w-full max-w-xs'>
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
