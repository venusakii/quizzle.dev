"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Lightbulb } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f26_1px,transparent_1px),linear-gradient(to_bottom,#1a1f26_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
            <span className="relative text-4xl font-display text-primary">?</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Quizzle<span className="text-accent">.dev</span>
          </h1>
        </div>

        {/* Main headline */}
        <h2 className="text-5xl md:text-7xl font-display font-bold text-balance leading-tight">
          Turn Curiosity into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            Creativity
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Quizzle helps you brainstorm, learn, and play through smart quizzes & idea generators.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-hover"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Start a Quiz
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-6 text-lg glow-hover bg-transparent"
          >
            <Lightbulb className="mr-2 h-5 w-5" />
            Generate an Idea
          </Button>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
