import { motion } from 'framer-motion'

export function Footer() {
  const footerSections = [
    { title: `About Us`, links: [`Our Story`, `Team`, `Careers`] },
    {
      title: `Services`,
      links: [`Recruitment`, `Performance Management`, `Employee Training`],
    },
    {
      title: `Contact`,
      info: [
        `123 HR Street, Suite 100`,
        `Abuja, NG 94105`,
        `contact@hrsolutions.com`,
      ],
    },
    { title: `Follow Us`, social: true },
  ]

  return (
    <footer className='w-full py-6 bg-slate-900 text-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className='space-y-4'
            >
              <h4 className='text-lg font-semibold'>{section.title}</h4>
              {section.links && (
                <ul className='space-y-2 text-sm'>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href='#' className='hover:underline'>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {section.info && (
                <ul className='space-y-2 text-sm'>
                  {section.info.map((item, idx, arr) => (
                    <li key={idx}>
                      {idx === arr.length - 1 ? (
                        <a
                          href={`mailto:${item}`}
                          className='hover:underline'
                          hidden={!(idx === arr.length - 1)}
                        >
                          {item}
                        </a>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {section.social && (
                <div className='flex space-x-4'>
                  {[`Facebook`, `Twitter`, `LinkedIn`].map((platform, idx) => (
                    <a key={idx} href='#' className='hover:text-blue-400'>
                      <span className='sr-only'>{platform}</span>
                      <svg
                        className='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center'
        >
          <p className='text-xs text-gray-400'>
            &copy; {new Date().getFullYear()} HR Solutions. All rights reserved.
          </p>
          <nav className='flex gap-4 sm:gap-6 mt-4 sm:mt-0'>
            <a
              className='text-xs hover:underline underline-offset-4 text-gray-400'
              href='#'
            >
              Terms of Service
            </a>
            <a
              className='text-xs hover:underline underline-offset-4 text-gray-400'
              href='#'
            >
              Privacy Policy
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  )
}
