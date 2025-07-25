import { motion } from 'framer-motion'

export default function TrustedBy() {
  const companies = [
    { name: 'Wild Card', logo: '🎮' },
    { name: 'Take Two Interactive', logo: '🎯' },
    { name: 'Rockstar', logo: '⭐' },
    { name: 'FiveM', logo: '🚗' },
    { name: 'Wynncraft', logo: '⚔️' },
    { name: 'Hypixel', logo: '🏰' },
    { name: 'Meta Publishing', logo: '📱' },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-8">
            Used & Trusted by:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{company.logo}</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {company.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}