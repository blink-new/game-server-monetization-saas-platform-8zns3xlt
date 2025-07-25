import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-slate-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Gaming Payments
            <br />
            <span className="text-blue-600 dark:text-blue-400">Done Right</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            The all-in-one monetization platform designed to grow your gaming revenue streams
          </motion.p>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              <span>7-day payout</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-500" />
              <span>Fraud & chargeback insurance</span>
            </div>
          </motion.div>

          {/* CTA Sections */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Game Studios */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                For Game Studios
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Expand globally, save dev time, and grow your revenue with our monetization & direct-to-consumer solution
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1">
                  Learn more
                </Button>
                <Button variant="outline" className="flex-1">
                  Schedule a demo
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Game Servers */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                For Game Servers
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join over 30,000 game servers earning revenue and start monetizing your game server today
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1">
                  Learn more
                </Button>
                <Button variant="outline" className="flex-1">
                  Contact us
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">30K</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Servers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">$1B+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">130</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Payment Methods</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">12 years</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}