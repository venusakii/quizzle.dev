"use client"

import { Brain, Lightbulb, Shuffle, Puzzle } from "lucide-react"
import { Card } from "@/components/ui/card"

const modes = [
  {
    icon: Brain,
    title: "Quiz Mode",
    description: "Test knowledge & learn playfully with adaptive questions",
    color: "from-primary to-primary/50",
  },
  {
    icon: Lightbulb,
    title: "Idea Generator",
    description: "Random prompts for writing, business, art, and more",
    color: "from-accent to-accent/50",
  },
  {
    icon: Shuffle,
    title: "Mix Mode",
    description: "Combine quiz + creativity for unexpected insights",
    color: "from-chart-3 to-chart-3/50",
  },
  {
    icon: Puzzle,
    title: "Challenge Mode",
    description: "Daily puzzles that push your creative boundaries",
    color: "from-primary via-accent to-chart-3",
  },
]

export function ModesSection() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Choose Your <span className="text-primary">Creative Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four unique modes to spark creativity, test knowledge, and unlock new perspectives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-300 p-6 cursor-pointer glow-hover"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${mode.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <mode.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-semibold text-foreground">{mode.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mode.description}</p>
                </div>

                {/* Hover indicator */}
                <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>

              {/* Border sweep effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-all duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
