import { motion } from 'framer-motion'

export default function Investors() {
  const investors = [
    { name: 'Andreessen Horowitz', logo: 'a16z' },
    { name: 'Griffin Gaming Partners', logo: 'GGP' },
    { name: 'Ubisoft', logo: 'UBI' },
    { name: 'Insight Partners', logo: 'IP' },
    { name: 'Intel Capital', logo: 'IC' },
    { name: 'Samsung', logo: 'SAM' },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Committed to Creators Since 2011
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Since 2011, we have been helping the gaming industry generate new revenue streams without having to invest the time and effort involved in processing global payments, billing, and taxes or entering long and expensive development cycles. Acquired in 2022, GameStore Pro is now a part of Overwolf, a developer of the world's leading UGC platforms which has already raised $150M from leading investors.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Our investors:
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {investors.map((investor, index) => (
                <motion.div
                  key={investor.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">{investor.logo}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {investor.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}