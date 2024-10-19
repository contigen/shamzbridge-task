import { motion } from 'framer-motion'
import { Briefcase, BarChart, Zap } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: `Recruitment & Staffing`,
      description:
        `Find the right talent for your organization with our comprehensive recruitment services.`,
    },
    {
      icon: BarChart,
      title: `Performance Management`,
      description:
        `Optimize your workforce with our data-driven performance management solutions.`,
    },
    {
      icon: Zap,
      title: `Employee Training`,
      description:
        `Empower your team with cutting-edge training and development programs.`,
    },
  ]

  return (
    <section id='services' className='w-full py-12 md:py-24 lg:py-32 bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600'
        >
          Our Services
        </motion.h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex flex-col space-y-4'
            >
              <div className='flex items-center space-x-4'>
                <div className='p-2 bg-blue-100 rounded-full'>
                  <service.icon className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-bold text-blue-600'>
                  {service.title}
                </h3>
              </div>
              <p className='text-slate-600'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
