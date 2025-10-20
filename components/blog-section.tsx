import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "How to Train Your Brain for Better Ideas",
    excerpt: "Discover the science behind creative thinking and practical exercises to boost your ideation skills.",
    readTime: "5 min read",
  },
  {
    title: "Gamify Your Learning Process",
    excerpt: "Transform boring study sessions into engaging experiences with quiz-based learning techniques.",
    readTime: "4 min read",
  },
  {
    title: "Why Creative Constraints Boost Innovation",
    excerpt: "Learn how limitations can actually enhance creativity and lead to breakthrough solutions.",
    readTime: "6 min read",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Insights & <span className="text-primary">Inspiration</span>
          </h2>
          <p className="text-lg text-muted-foreground">Explore ideas about creativity, learning, and innovation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-300 p-6 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-4">
                {/* Read time badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-semibold text-primary">{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>

                {/* Read more */}
                <div className="flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                  <span className="font-semibold">Read more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Shadow effect */}
              <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
