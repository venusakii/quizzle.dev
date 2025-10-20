"use client"

import { Palette, Users, GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"

const useCases = [
  {
    icon: Palette,
    title: "For Creators",
    description: "Writers, designers, and artists seeking fresh inspiration",
    examples: ["Beat writer's block", "Generate design concepts", "Explore new perspectives"],
  },
  {
    icon: Users,
    title: "For Teams",
    description: "Collaborative brainstorming and engaging icebreakers",
    examples: ["Team building activities", "Innovation workshops", "Creative meetings"],
  },
  {
    icon: GraduationCap,
    title: "For Learners",
    description: "Make studying engaging with quiz-based learning",
    examples: ["Interactive study sessions", "Knowledge retention", "Fun test prep"],
  },
]

export function UseCases() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Built For <span className="text-primary">Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you create, collaborate, or learn, Quizzle adapts to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border-2 border-border hover:border-accent transition-all duration-300 p-8 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-semibold text-foreground">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>

                {/* Examples */}
                <ul className="space-y-2 pt-4">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {example}
                    </li>
                  ))}
                </ul>

                {/* Hover indicator */}
                <div className="flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4">
                  <span className="font-semibold">Discover</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
