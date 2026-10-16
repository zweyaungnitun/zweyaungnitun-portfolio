"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, User, Send, X, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm a quick FAQ bot for Zwe Yaung Ni Tun's portfolio. Ask me anything about his production agentic AI systems, Omni Exam AI, LangGraph multi-agent pipelines, RAG, evaluation with LangSmith & RAGAS, or certifications!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const generateBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("omni") || lowerInput.includes("exam")) {
      return "Omni Exam AI (omniexamai.gicjp.com) is a live bilingual (EN/JA) SaaS for AI-generated, proctored exams where Zwe is the AI product lead. It features a 4-agent LangGraph pipeline (orchestrator, generator, reviewer, evaluator) generating 20 questions in < 3 minutes, proctored delivery with tab-switch detection and fullscreen locks, auto-grading of long-form answers, and deployment on GCP Cloud Run & Vertex AI."
    }

    if (lowerInput.includes("skill") || lowerInput.includes("technology") || lowerInput.includes("stack") || lowerInput.includes("agent")) {
      return "Zwe's technical stack spans:\n• Agentic AI & LLMs: LangGraph, LangChain, Multi-Agent Systems, RAG, Vector DBs (Pinecone), Hybrid/Semantic Search, Model Context Protocol (MCP), Tool Calling\n• Evaluation: RAGAS, DeepEval, LangSmith, LLM-as-a-judge, agent benchmarking\n• Backend: Python (FastAPI), TypeScript, Node.js, Java, Spring Boot, REST, gRPC, PostgreSQL, Redis\n• Frontend: React, Next.js\n• Cloud & DevOps: Google Cloud Run, Vertex AI, Gemini API, AWS Lambda, Bedrock, API Gateway, Docker, CI/CD (GitHub Actions), Kubernetes."
    }

    if (lowerInput.includes("experience") || lowerInput.includes("work") || lowerInput.includes("gic")) {
      return "Zwe has nearly 3 years of experience as a Full Stack AI Engineer. At Global Innovation Consulting (GIC) since January 2024, he is the AI Product Lead for Omni Exam AI (omniexamai.gicjp.com) and has engineered AI customer support and enterprise management systems using LangGraph multi-agent workflows, FastAPI, Spring Boot, React, and GCP/AWS."
    }

    if (lowerInput.includes("matcher") || lowerInput.includes("resume") || lowerInput.includes("job")) {
      return "Agentic Job Matcher (github.com/zweyaungnitun/AI-Resume-Job-Matching-Agent) is an open-source intelligent multi-agent system built with Python (FastAPI), React, TypeScript, LangChain, Gemini AI, Pinecone, and PostgreSQL. It features multi-source job search (Pinecone RAG + real-time search), 4-factor compatibility scoring (0-100), AI CV reviews with tailored improvement recommendations, and a secure admin dashboard with RBAC."
    }

    if (lowerInput.includes("project") || lowerInput.includes("portfolio")) {
      return "Key projects include:\n1) Omni Exam AI (Live Product at omniexamai.gicjp.com) - 4-agent exam SaaS on LangGraph & Vertex AI\n2) Agent Evaluation Suite (Open Source on GitHub) - Benchmark suite with RAGAS, DeepEval, LangSmith, and CI/CD\n3) Agentic Job Matcher (github.com/zweyaungnitun/AI-Resume-Job-Matching-Agent) - Multi-agent CV analysis, Pinecone RAG job matching, and 4-factor scoring algorithm\n4) Customer Support RAG Assistant - Multi-turn support chatbot with Pinecone & Claude."
    }

    if (lowerInput.includes("certif") || lowerInput.includes("credential")) {
      return "Zwe holds 4 prestigious certifications:\n• ITPEC Fundamental IT Engineer (FE) - Japan-recognized IT engineer exam (CS Bachelor equivalent)\n• AI Engineer for Developers Associate\n• IBM RAG and Agentic AI Professional\n• Oracle Generative AI Professional."
    }

    if (lowerInput.includes("language") || lowerInput.includes("japanese") || lowerInput.includes("jlpt")) {
      return "Zwe is bilingual in English (Professional) and Japanese (JLPT N3 certified), enabling seamless technical collaboration with global and Japanese engineering teams."
    }

    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("phone") || lowerInput.includes("hire") || lowerInput.includes("contract")) {
      return "Zwe is open to full-time or contract roles (comfortable in fast-shipping, fully remote teams). Reach him at:\n• Email: zweyaungnitun2020@gmail.com\n• Phone: +95 9984067356\n• GitHub: github.com/zweyaungnitun\n• LinkedIn: linkedin.com/in/zwe-yaung-ni-tun-476979211\n• Live Product: omniexamai.gicjp.com"
    }

    return "Zwe Yaung Ni Tun is a Full Stack System Developer & End-to-End AI Engineer specializing in scalable web architectures, microservices, and production agentic AI systems (LangGraph, RAG, FastAPI, React/Next.js, PostgreSQL, GCP/AWS). Feel free to ask about Omni Exam AI, his full stack systems, work experience, or certifications!"
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        aria-label="Open chat assistant"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 ai-glow shadow-lg z-50"
        size="icon"
      >
        <Bot className="w-6 h-6" />
      </Button>
    )
  }

  return (
    <Card
      className={`fixed bottom-6 right-6 w-96 bg-card/95 backdrop-blur-xl border-primary/20 shadow-2xl z-50 transition-all duration-300 ${
        isMinimized ? "h-16" : "h-[500px]"
      }`}
    >
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-border">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Bot className="w-4 h-4 text-primary" />
          </div>
          Portfolio FAQ Bot
        </CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label={isMinimized ? "Expand chat" : "Minimize chat"} onClick={() => setIsMinimized(!isMinimized)} className="h-8 w-8">
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="icon" aria-label="Close chat" onClick={() => setIsOpen(false)} className="h-8 w-8">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-[calc(500px-80px)]">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-secondary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Zwe's skills, projects, or experience..."
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" aria-label="Send message" className="bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
