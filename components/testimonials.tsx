"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

const testimonials = [
  {
    quote: "Quizzle turned my creative blocks into breakthroughs.",
    author: "Devon L.",
    role: "UX Designer",
  },
  {
    quote: "Perfect for team brainstorms. Everyone gets engaged.",
    author: "Mia T.",
    role: "Product Manager",
  },
  {
    quote: "Finally, a fun way to study that actually works!",
    author: "Alex K.",
    role: "Student",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Loved By <span className="text-primary">Creators</span>
          </h2>
          <p className="text-lg text-muted-foreground">Join thousands who've unlocked their creative potential</p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-8 bg-card border-2 transition-all duration-300 cursor-pointer ${
                activeIndex === index ? "border-primary scale-105" : "border-border hover:border-accent"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="space-y-4">
                {/* Quote */}
                <div className="text-4xl text-primary/30">"</div>
                <p className="text-lg leading-relaxed text-balance">{testimonial.quote}</p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-primary w-8" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
