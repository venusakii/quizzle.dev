"use client"

import { Cpu, Puzzle, Zap } from "lucide-react"
import { useState } from "react"

const features = [
  { icon: Zap, text: "Smart pattern recognition", delay: 0 },
  { icon: Puzzle, text: "Dynamic creativity prompts", delay: 200 },
  { icon: Cpu, text: "Instant idea reshuffling", delay: 400 },
]

export function AIPowered() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - AI Brain Circuit SVG */}
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-hover">
                <Cpu className="w-10 h-10 text-primary-foreground" />
              </div>

              {/* Circuit nodes */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 360) / 8
                const radius = 120
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <div key={i}>
                    {/* Connection line */}
                    <div
                      className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-primary/50 to-transparent origin-left"
                      style={{
                        width: `${radius}px`,
                        transform: `rotate(${angle}deg)`,
                      }}
                    />
                    {/* Node */}
                    <div
                      className="absolute w-4 h-4 rounded-full bg-accent animate-pulse"
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: "translate(-50%, -50%)",
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-balance">
                AI-Powered <span className="text-primary">Simplicity</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Behind the playful interface lies sophisticated AI that understands patterns, generates contextual
                prompts, and adapts to your creative style.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? "scale-110 glow-hover" : ""}`}
                  >
                    <feature.icon
                      className={`w-6 h-6 transition-colors duration-300 ${hoveredIndex === index ? "text-accent" : "text-primary"}`}
                    />
                  </div>
                  <p className="text-lg font-semibold">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
