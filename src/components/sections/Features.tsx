import { motion } from 'framer-motion'
import { ShoppingCart, CreditCard, RefreshCw, Shield, TrendingUp, Globe } from 'lucide-react'

export default function Features() {
  const products = [
    {
      icon: ShoppingCart,
      title: 'In-Game or Web Stores',
      description: 'Sell items, subscriptions, season passes, and DLCs from a webstore or an in-game customized shop using our API',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: CreditCard,
      title: 'Checkout',
      description: 'Allow players to pay using PayPal, Credit Card, Paysafecard, and 130 local payment methods',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: RefreshCw,
      title: 'Sales Tax & Compliance',
      description: 'Tebex handles all customer billing-related support. We also collect and remit local and worldwide sales taxes',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Shield,
      title: 'Fraud Protection',
      description: 'We handle all chargebacks and fraud detection, respond to disputes on your behalf, and provide 100% insurance',
      color: 'text-red-600 dark:text-red-400'
    }
  ]

  const benefits = [
    {
      title: 'Global Compliance',
      description: 'Tebex is responsible for all worldwide taxes and handles billing-related support on behalf of your customers'
    },
    {
      title: 'Instant Withdrawals',
      description: 'Instantly withdraw funds directly to your bank account or PayPal'
    },
    {
      title: 'Your Merchant of Record',
      description: 'We build and maintain relationships with 100+ major and local payment methods worldwide'
    },
    {
      title: 'Robust and Customizable',
      description: 'Enjoy a fully customizable in-game store layout and a robust infrastructure (99.99% uptime)'
    },
    {
      title: 'Monetize in Minutes',
      description: 'Easily create an in-game shop to sell passes, subscriptions, items, DLCs, cosmetics, and more'
    },
    {
      title: 'Stable and Experienced',
      description: 'With 12+ years of experience and $150M raised from top investors, we\'re here to stay'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Products & Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <product.icon className={`w-12 h-12 ${product.color} mb-4`} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {product.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Maximize Your Gaming Revenue
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
        </motion.div>

        {/* Why Tebex */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why GameStore Pro?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}