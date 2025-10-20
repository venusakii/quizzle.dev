"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Twitter, MessageCircle } from "lucide-react"

export function ContactFooter() {
  return (
    <footer className="py-24 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left - Contact form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-display font-bold">Get In Touch</h3>
              <p className="text-muted-foreground">Have questions or ideas? We'd love to hear from you.</p>
            </div>

            <form className="space-y-4">
              <Input placeholder="Name" className="bg-card border-border focus:border-primary" />
              <Input type="email" placeholder="Email" className="bg-card border-border focus:border-primary" />
              <Textarea
                placeholder="Message"
                rows={4}
                className="bg-card border-border focus:border-primary resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-hover"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Right - Social links */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-display font-bold">Connect</h3>
              <p className="text-muted-foreground">Join our community across platforms</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Github, label: "GitHub", handle: "@quizzledev" },
                { icon: Twitter, label: "Twitter", handle: "@quizzledev" },
                { icon: MessageCircle, label: "Discord", handle: "Join Server" },
              ].map((social, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 p-4 rounded-lg bg-card border-2 border-border hover:border-primary transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <social.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{social.label}</p>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">?</span>
              <span className="text-xl font-display font-bold">
                Quizzle<span className="text-accent">.dev</span>
              </span>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">© 2025 Quizzle.dev — Play. Learn. Create.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
