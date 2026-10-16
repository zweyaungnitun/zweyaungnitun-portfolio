"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

const CONTACT_EMAIL = "zweyaungnitun2020@gmail.com"

const fieldClass =
  "w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"

// Opens the visitor's mail client with the message pre-filled (no backend required).
export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = String(data.get("subject") || "Portfolio inquiry")
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-xs font-medium">Name</label>
          <input id="contact-name" name="name" type="text" required placeholder="Your name" className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="text-xs font-medium">Email</label>
          <input id="contact-email" name="email" type="email" required placeholder="your.email@example.com" className={fieldClass} />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-subject" className="text-xs font-medium">Subject</label>
        <input id="contact-subject" name="subject" type="text" required placeholder="Full-time / Contract AI Role, Omni Exam AI, etc." className={fieldClass} />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-xs font-medium">Message</label>
        <textarea id="contact-message" name="message" rows={4} required placeholder="Describe your team, project requirements, or opportunity..." className={`${fieldClass} resize-none`} />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 ai-glow">
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </Button>
      {sent && (
        <p role="status" className="text-xs text-muted-foreground text-center">
          Your email app should have opened. If not, write to {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  )
}
