import { motion } from 'framer-motion'
import { MessageCircle, HelpCircle, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Help() {
  const helpOptions = [
    {
      icon: MessageCircle,
      title: 'I want to speak to someone about monetization',
      description: 'Get expert advice on maximizing your gaming revenue',
      buttonText: 'Contact Sales',
      buttonVariant: 'default' as const,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: HelpCircle,
      title: 'I need help getting started',
      description: 'Step-by-step guidance to set up your store',
      buttonText: 'Get Support',
      buttonVariant: 'outline' as const,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: CreditCard,
      title: 'I need help with a GameStore Pro transaction',
      description: 'Support for payment issues and billing questions',
      buttonText: 'Transaction Help',
      buttonVariant: 'outline' as const,
      color: 'text-purple-600 dark:text-purple-400'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How can we help?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {helpOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm">
                  <option.icon className={`w-8 h-8 ${option.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {option.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {option.description}
              </p>
              
              <Button 
                variant={option.buttonVariant}
                className="w-full"
              >
                {option.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional support note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              I'm a gamer and GameStore Pro is appearing on my bank statement
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Have a question or need support regarding a GameStore Pro charge?
            </p>
            <Button variant="outline">
              Get in touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}