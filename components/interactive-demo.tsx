"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"

const questions = [
  "If you could redesign a common object, what would it be?",
  "What if your favorite hobby became your full-time job?",
  "How would you explain color to someone who's never seen?",
  "What's a problem in your life that needs a creative solution?",
  "If you could combine two animals, which would you choose?",
  "What would you do with an extra hour every day?",
  "How would you make learning more fun for everyone?",
  "What's a tradition you'd like to start?",
  "If you could invent a new holiday, what would it celebrate?",
  "What's something ordinary that deserves more appreciation?",
]

export function InteractiveDemo() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const shuffleQuestion = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            See It In <span className="text-accent">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">Every question is a doorway to new ideas</p>
        </div>

        <div className="relative">
          {/* Question card */}
          <div className="border-glow rounded-2xl p-12 bg-card/50 backdrop-blur-sm min-h-[300px] flex flex-col items-center justify-center space-y-8">
            {/* Question mark icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
              <div className="relative text-6xl">❓</div>
            </div>

            {/* Question text */}
            <p
              className={`text-2xl md:text-3xl font-display text-center text-balance transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {questions[currentQuestion]}
            </p>

            {/* Shuffle button */}
            <Button
              onClick={shuffleQuestion}
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold glow-hover"
              disabled={isAnimating}
            >
              <Shuffle className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              Shuffle Ideas
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
          <div
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  )
}
