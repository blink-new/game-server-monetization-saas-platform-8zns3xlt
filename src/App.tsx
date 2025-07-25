import { useState, useEffect } from 'react'
import { createClient } from '@/blink/client'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import Features from '@/components/sections/Features'
import Investors from '@/components/sections/Investors'
import Help from '@/components/sections/Help'
import Footer from '@/components/sections/Footer'

const blink = createClient()

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar user={user} />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Investors />
        <Help />
      </main>
      <Footer />
    </div>
  )
}

export default App