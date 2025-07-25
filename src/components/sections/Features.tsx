import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  CreditCard, 
  Code, 
  Globe, 
  BarChart3, 
  Webhook,
  Key,
  Gamepad2,
  Lock
} from 'lucide-react'
import { motion } from 'framer-motion'

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'JWT authentication, API key validation, and encrypted server communication with code signing protection.',
      color: 'text-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Integrated Stripe & PayPal support with subscription management and one-time purchases.',
      color: 'text-green-600'
    },
    {
      icon: Code,
      title: 'Developer API',
      description: 'RESTful API with rate limiting, comprehensive documentation, and webhook delivery system.',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'Custom Store Hosting',
      description: 'Branded subdomains, custom domains, and fully customizable store templates.',
      color: 'text-orange-600'
    },
    {
      icon: Gamepad2,
      title: 'Multi-Game Support',
      description: 'Native integrations for FiveM, Minecraft, Rust, and other popular multiplayer games.',
      color: 'text-red-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time order tracking, revenue analytics, and comprehensive business insights.',
      color: 'text-indigo-600'
    },
    {
      icon: Webhook,
      title: 'Webhook System',
      description: 'Automated in-game delivery with secure webhook endpoints and retry mechanisms.',
      color: 'text-teal-600'
    },
    {
      icon: Key,
      title: 'API Key Management',
      description: 'Secure API key generation, validation, and management with granular permissions.',
      color: 'text-yellow-600'
    },
    {
      icon: Lock,
      title: 'Script Protection',
      description: 'Code signing and obfuscation for downloadable scripts with anti-piracy measures.',
      color: 'text-pink-600'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for game server owners who demand enterprise-grade security, 
            seamless integrations, and powerful monetization tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}