import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"

export function Community() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-balance">
            Creativity grows when <span className="text-accent">shared</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of creators, learners, and innovators
          </p>
        </div>

        {/* Community illustration */}
        <div className="relative py-12">
          <div className="flex items-center justify-center gap-4">
            {/* Connected nodes illustration */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative">
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary flex items-center justify-center animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <span className="text-2xl">{["💡", "🎨", "🧠", "✨", "🚀"][i]}</span>
                </div>
                {i < 4 && (
                  <div className="absolute top-1/2 left-full w-4 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 glow-hover"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Join Discord
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 glow-hover bg-transparent"
          >
            <Mail className="mr-2 h-5 w-5" />
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  )
}
