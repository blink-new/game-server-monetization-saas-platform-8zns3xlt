import { createClient as createBlinkClient } from '@blinkdotnew/sdk'

export const createClient = () => createBlinkClient({
  projectId: 'game-server-monetization-saas-platform-8zns3xlt',
  authRequired: true
})

export const blink = createClient()