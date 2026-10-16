"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, MessageCircle, Menu, X } from "lucide-react"

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-border z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-mono text-lg font-bold gradient-text flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            <span>{"<Zwe.AI />"}</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:block">
            <Button variant="outline" size="sm" className="ai-glow border-primary/50 bg-transparent">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </a>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-3 border-t border-border space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
