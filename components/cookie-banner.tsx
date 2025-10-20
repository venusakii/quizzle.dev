"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-card border-2 border-primary rounded-xl p-6 shadow-2xl backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍪</span>
              <h3 className="font-display font-semibold text-lg">Cookie Notice</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to generate ideas, not track them. By continuing, you agree to our creative use of
              technology.
            </p>
            <Button
              onClick={acceptCookies}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-hover"
            >
              Accept 💡
            </Button>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
