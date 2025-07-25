import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export function SupportedGames() {
  const games = [
    {
      name: 'FiveM',
      description: 'GTA V multiplayer modification',
      integration: 'Native API',
      status: 'Full Support',
      logo: '🚗',
      features: ['Secret key authentication', 'In-game commands', 'Real-time delivery']
    },
    {
      name: 'Minecraft',
      description: 'Java & Bedrock editions',
      integration: 'Plugin/Mod',
      status: 'Full Support',
      logo: '⛏️',
      features: ['Bukkit/Spigot plugin', 'Forge mod support', 'Command execution']
    },
    {
      name: 'Rust',
      description: 'Survival multiplayer game',
      integration: 'Oxide Plugin',
      status: 'Full Support',
      logo: '🔧',
      features: ['Oxide framework', 'Item delivery', 'Permission management']
    },
    {
      name: 'Garry\'s Mod',
      description: 'Source engine sandbox',
      integration: 'Lua Addon',
      status: 'Beta',
      logo: '🔨',
      features: ['Workshop integration', 'DarkRP support', 'Custom gamemode']
    },
    {
      name: 'CS2',
      description: 'Counter-Strike 2',
      integration: 'SourceMod',
      status: 'Coming Soon',
      logo: '🎯',
      features: ['SourceMod plugin', 'Skin delivery', 'VIP systems']
    },
    {
      name: 'ARK',
      description: 'Survival Evolved',
      integration: 'RCON',
      status: 'Coming Soon',
      logo: '🦕',
      features: ['RCON commands', 'Item spawning', 'Player management']
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Full Support':
        return 'bg-green-500/10 text-green-600 border-green-500/20'
      case 'Beta':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
      case 'Coming Soon':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20'
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20'
    }
  }

  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Supported{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Game Platforms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Native integrations with the most popular multiplayer gaming platforms. 
            More games added regularly based on community demand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{game.logo}</div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {game.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{game.description}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(game.status)}>
                      {game.status}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-foreground">Integration:</span>
                      <Badge variant="outline">{game.integration}</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {game.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Don't see your game? We're constantly adding new integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-primary hover:text-primary/80 font-medium">
              Request Integration →
            </button>
            <button className="text-primary hover:text-primary/80 font-medium">
              View Integration Guide →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}