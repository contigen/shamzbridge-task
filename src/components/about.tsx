import { motion } from 'framer-motion'
import { Briefcase, Users, Heart } from 'lucide-react'

export function About() {
  const aboutItems = [
    {
      icon: Briefcase,
      title: `Our Mission`,
      description: `To revolutionize human resource management by providing cutting-edge solutions that foster growth, innovation, and employee satisfaction.`,
    },
    {
      icon: Users,
      title: `Our Team`,
      description: `A diverse group of HR experts, tech innovators, and business strategists dedicated to transforming workplaces.`,
    },
    {
      icon: Heart,
      title: `Our Values`,
      description: `We believe in integrity, innovation, and putting people first in every solution we deliver.`,
    },
  ]

  return (
    <section id='about' className='w-full py-12 md:py-24 lg:py-32 bg-slate-50'>
      <div className='container mx-auto px-4 md:px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600'
        >
          About Us
        </motion.h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {aboutItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className='flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg'
            >
              <item.icon className='h-12 w-12 text-blue-600' />
              <h3 className='text-xl font-bold text-blue-600'>{item.title}</h3>
              <p className='text-center text-slate-600'>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
