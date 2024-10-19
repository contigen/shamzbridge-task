import { motion } from 'framer-motion'
import { Button } from '../components/button'

function PlaceholderSVG({ width, height }: { width: number; height: number }) {
  return (
    <svg
      {...{ width, height }}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect {...{ width, height }} fill='#F3F4F6' />
      <path
        d='M160 72C160 89.6731 145.673 104 128 104C110.327 104 96 89.6731 96 72C96 54.3269 110.327 40 128 40C145.673 40 160 54.3269 160 72Z'
        fill='#E5E7EB'
      />
      <path
        d='M71 176H185C188.314 176 191 178.686 191 182V190C191 193.314 188.314 196 185 196H71C67.6863 196 65 193.314 65 190V182C65 178.686 67.6863 176 71 176Z'
        fill='#E5E7EB'
      />
      <path
        d='M71 208H185C188.314 208 191 210.686 191 214V222C191 225.314 188.314 228 185 228H71C67.6863 228 65 225.314 65 222V214C65 210.686 67.6863 208 71 208Z'
        fill='#E5E7EB'
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col justify-center space-y-4'
          >
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Empowering Your <span className='text-blue-600'>Workforce</span>
              </h1>
              <p className='max-w-[600px] text-slate-600 md:text-xl'>
                Innovative HR solutions to help your business thrive. We focus
                on people, so you can focus on growth.
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-2'>
              <Button className='bg-blue-600 text-white hover:bg-blue-700'>
                Get Started
              </Button>
              <Button variant='outline'>Learn More</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center'
          >
            <PlaceholderSVG width={400} height={400} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
