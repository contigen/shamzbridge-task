import { motion } from 'framer-motion'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { Shield } from 'lucide-react'

export function Contact() {
  return (
    <section id='contact' className='w-full py-12 md:py-24 lg:py-32 bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col justify-center space-y-4'
          >
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600'>
              Get in Touch
            </h2>
            <p className='max-w-[600px] text-slate-600 md:text-xl'>
              Ready to transform your HR processes? Contact us today to learn
              how we can help your business thrive.
            </p>
            <div className='flex items-center space-x-4'>
              <Shield className='h-6 w-6 text-blue-600' />
              <p className='text-sm text-slate-600'>
                Your information is safe with us. We never share your data.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='space-y-4'
          >
            <div className='grid grid-cols-2 gap-4'>
              <Input className='w-full' placeholder='First Name' type='text' />
              <Input className='w-full' placeholder='Last Name' type='text' />
            </div>
            <Input className='w-full' placeholder='Email' type='email' />
            <Input className='w-full' placeholder='Company' type='text' />
            <Button className='w-full bg-blue-600 text-white hover:bg-blue-700'>
              Send Message
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
