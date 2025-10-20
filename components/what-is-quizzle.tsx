"use client"

import { useState } from "react"

export function WhatIsQuizzle() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-balance">
              A creative engine <span className="text-primary">disguised as fun</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quizzle isn't just another quiz app. It's a playground for your mind, combining the engagement of
              interactive quizzes with the power of AI-driven creativity prompts. Every click sparks a new idea.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a creator looking for inspiration, a team seeking better brainstorms, or a learner who
              wants to make studying fun, Quizzle transforms the way you think.
            </p>
          </div>

          {/* Right - Interactive bubble */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-64 h-64 cursor-pointer transition-all duration-500 ease-out"
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
            >
              {/* Outer glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl transition-all duration-500 ${isExpanded ? "scale-150" : "scale-100"}`}
              />

              {/* Main bubble */}
              <div
                className={`absolute inset-0 border-glow rounded-full flex items-center justify-center transition-all duration-500 ${isExpanded ? "scale-110" : "scale-100"}`}
              >
                <div className="text-center p-8 space-y-2">
                  <div className="text-6xl mb-4 animate-bounce">💡</div>
                  <p className="text-sm font-semibold text-primary">
                    {isExpanded ? "Ideas Expanding..." : "Hover to Explore"}
                  </p>
                </div>
              </div>

              {/* Orbiting particles */}
              {isExpanded && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-accent rounded-full animate-spin"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${i * 60}deg) translateY(-140px)`,
                        animationDuration: "3s",
                      }}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
