import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Monetize Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Game Server
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The complete SaaS platform for multiplayer game server owners. 
              Create secure online stores, sell digital items, and process payments with enterprise-grade security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Store
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Demo
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-primary" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Globe className="h-5 w-5 text-primary" />
              <span>Global Payments</span>
            </div>
          </motion.div>

          {/* Hero image/demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
              <div className="bg-card rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-muted p-4 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-sm text-muted-foreground">gamestore-pro.com/dashboard</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h3 className="font-semibold text-primary mb-2">Revenue</h3>
                      <p className="text-2xl font-bold">$12,847</p>
                      <p className="text-sm text-muted-foreground">+23% this month</p>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-4">
                      <h3 className="font-semibold text-accent mb-2">Orders</h3>
                      <p className="text-2xl font-bold">1,234</p>
                      <p className="text-sm text-muted-foreground">+15% this month</p>
                    </div>
                    <div className="bg-green-500/5 rounded-lg p-4">
                      <h3 className="font-semibold text-green-600 mb-2">Active Players</h3>
                      <p className="text-2xl font-bold">856</p>
                      <p className="text-sm text-muted-foreground">Online now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}