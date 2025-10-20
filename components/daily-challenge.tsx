"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export function DailyChallenge() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 bg-[length:200%_100%] animate-[gradient_8s_linear_infinite]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-balance">
              One question. <span className="text-accent">Infinite answers.</span>
            </h2>
            <p className="text-lg text-muted-foreground">Challenge yourself daily with thought-provoking questions</p>
          </div>

          {/* Daily question card */}
          <div className="border-glow rounded-2xl p-12 bg-card/80 backdrop-blur-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Today's Challenge</span>
            </div>

            <p className="text-2xl md:text-3xl font-display text-balance">
              "If you could solve one global problem with technology, what would it be and why?"
            </p>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold glow-hover bg-transparent"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Get Tomorrow's Challenge
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">New challenge drops every day at midnight</p>
        </div>
      </div>
    </section>
  )
}
