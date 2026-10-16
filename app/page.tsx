import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Brain,
  Server,
  Smartphone,
  Zap,
  Star,
  GitBranch,
  Calendar,
  MessageCircle,
  Bot,
  Sparkles,
  Cpu,
  Network,
  Send,
  Award,
  Trophy,
  CheckCircle2,
  Globe,
  Phone,
  MapPin,
  Terminal,
  Layers,
  Activity,
  ShieldCheck,
} from "lucide-react"
import { AIChatbot } from "@/components/ai-chatbot"
import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background neural-grid">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 ai-glow">
                      <img
                        src="/zwe-yaung-ni-tun.jpg"
                        alt="Zwe Yaung Ni Tun - Full Stack AI Engineer"
                        className="w-full h-full rounded-full object-cover bg-card"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-accent rounded-full border-2 border-background flex items-center justify-center">
                      <Bot className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">ZWE YAUNG NI TUN</h1>
                    <p className="text-primary font-semibold text-lg flex flex-wrap items-center gap-2 mt-1">
                      <span>Full Stack System Developer</span>
                      <span className="text-muted-foreground text-sm font-normal">&</span>
                      <span>End-to-End AI Engineer</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-emerald-400 font-medium">Lead for Omni Exam AI (Live SaaS) • GIC</span>
                      </div>
                      <Badge variant="outline" className="text-xs text-muted-foreground">
                        Open to Full-Time & Contract
                      </Badge>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold text-balance leading-tight">
                  Architecting <span className="gradient-text">Full-Stack Systems</span> & End-to-End AI
                </h2>

                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Full Stack & AI Engineer with nearly 3 years of experience building production agentic AI systems. Lead for <strong className="text-foreground">Omni Exam AI</strong>, a live bilingual (EN/JA) exam SaaS using <span className="text-primary font-medium">LangGraph</span>, <span className="text-foreground font-medium">React</span> and <span className="text-secondary font-medium">FastAPI</span>.
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3.5 py-1.5 bg-primary/10 text-primary border-primary/20 font-mono text-xs">
                  <Layers className="w-3.5 h-3.5 mr-1.5 text-primary" />
                  Full-Stack Architecture
                </Badge>
                <Badge variant="secondary" className="px-3.5 py-1.5 bg-secondary/10 text-secondary border-secondary/20 font-mono text-xs">
                  <Brain className="w-3.5 h-3.5 mr-1.5 text-secondary" />
                  LangGraph & Multi-Agent
                </Badge>
                <Badge variant="secondary" className="px-3.5 py-1.5 bg-accent/10 text-accent border-accent/20 font-mono text-xs">
                  <Database className="w-3.5 h-3.5 mr-1.5 text-accent" />
                  PostgreSQL & Vector RAG
                </Badge>
                <Badge variant="outline" className="px-3 py-1 font-mono text-xs">
                  Python (FastAPI) & Node.js
                </Badge>
                <Badge variant="outline" className="px-3 py-1 font-mono text-xs">
                  React & Next.js
                </Badge>
                <Badge variant="outline" className="px-3 py-1 font-mono text-xs">
                  RAGAS & LangSmith Observability
                </Badge>
                <Badge variant="outline" className="px-3 py-1 font-mono text-xs">
                  GCP Cloud Run & AWS
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <a href="#projects">
                  <Button size="lg" className="px-7 bg-primary hover:bg-primary/90 ai-glow">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Explore Projects
                  </Button>
                </a>
                <a href="https://omniexamai.gicjp.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-emerald-300 bg-emerald-500/5 hover:bg-emerald-500/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Omni Exam AI (Live SaaS)
                  </Button>
                </a>
                <a href="https://github.com/zweyaungnitun" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 border-primary/30 hover:border-primary bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>

              {/* Contact Quick Info */}
              <div className="flex flex-wrap items-center gap-5 pt-4 text-xs text-muted-foreground border-t border-border/50">
                <a href="https://omniexamai.gicjp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>omniexamai.gicjp.com</span>
                </a>
                <a href="https://github.com/zweyaungnitun" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                  <span>github.com/zweyaungnitun</span>
                </a>
                <a href="https://www.linkedin.com/in/zwe-yaung-ni-tun-476979211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="mailto:zweyaungnitun2020@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>zweyaungnitun2020@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Neural Dashboard Mockup / Stats Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <Card className="relative bg-card/60 backdrop-blur-md border-primary/20 p-6 shadow-2xl">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <div className="flex items-center gap-3">
                        <Activity className="w-6 h-6 text-primary" />
                        <div>
                          <span className="font-semibold block text-sm">Full-Stack & End-to-End AI Stack</span>
                          <span className="text-xs text-muted-foreground font-mono">React · FastAPI · PostgreSQL · LangGraph · Cloud Run</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-emerald-400 font-mono font-medium">Live Systems</span>
                      </div>
                    </div>

                    <div className="space-y-3.5">
                      <div className="space-y-0.5">
                        <div className="flex justify-between items-center text-xs font-mono gap-2">
                          <span className="text-foreground/90 font-medium">Frontend & UX</span>
                          <span className="text-emerald-400 font-semibold text-right">React 19 · Next.js · Tailwind</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Responsive client state, AI streaming UI, proctored exam interfaces</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between items-center text-xs font-mono gap-2">
                          <span className="text-foreground/90 font-medium">Backend API & Microservices</span>
                          <span className="text-secondary font-semibold text-right">FastAPI · Node.js · Spring Boot · Redis</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Async endpoints, REST/gRPC, multi-tenant isolation</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between items-center text-xs font-mono gap-2">
                          <span className="text-foreground/90 font-medium">Relational & Vector Data</span>
                          <span className="text-primary font-semibold text-right">PostgreSQL · Pinecone</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Schemas, hybrid search and retrieval over past exam questions</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between items-center text-xs font-mono gap-2">
                          <span className="text-foreground/90 font-medium">Agentic AI & Workflows</span>
                          <span className="text-accent font-semibold text-right">LangGraph · LangChain · MCP</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Four-agent pipeline: orchestrator, generator, reviewer, evaluator</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between items-center text-xs font-mono gap-2">
                          <span className="text-foreground/90 font-medium">Evaluation & Observability</span>
                          <span className="text-emerald-400 font-semibold text-right">LangSmith · RAGAS · DeepEval</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Regression tests as a pre-deployment gate in GitHub Actions</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between items-center text-xs font-mono gap-2">
                          <span className="text-foreground/90 font-medium">Cloud & CI/CD</span>
                          <span className="text-primary font-semibold text-right">GCP Cloud Run · Vertex AI · AWS</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Containerized services and automated pipelines</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 pt-3 border-t border-border text-center">
                      <div className="p-2 rounded bg-primary/5 border border-primary/10">
                        <div className="text-sm font-bold text-primary font-mono">4</div>
                        <div className="text-xs text-muted-foreground">Agents in pipeline</div>
                      </div>
                      <div className="p-2 rounded bg-emerald/5 border border-emerald/10">
                        <div className="text-sm font-bold text-emerald-400 font-mono">&lt;3 min</div>
                        <div className="text-xs text-muted-foreground">20-question exam</div>
                      </div>
                      <div className="p-2 rounded bg-secondary/5 border border-secondary/10">
                        <div className="text-sm font-bold text-secondary font-mono">EN / JA</div>
                        <div className="text-xs text-muted-foreground">Bilingual product</div>
                      </div>
                      <div className="p-2 rounded bg-accent/5 border border-accent/10">
                        <div className="text-sm font-bold text-accent font-mono">~3 yrs</div>
                        <div className="text-xs text-muted-foreground">Production AI</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-sm border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group p-4 rounded-xl hover:bg-card/50 transition-colors">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Layers className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">Full-Stack Systems</div>
              <div className="text-xs text-muted-foreground mt-1">Next.js, FastAPI, Node & PostgreSQL</div>
            </div>
            <div className="text-center group p-4 rounded-xl hover:bg-card/50 transition-colors">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Brain className="w-7 h-7 text-secondary" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">Agentic AI & LangGraph</div>
              <div className="text-xs text-muted-foreground mt-1">Multi-Agent Systems & RAG</div>
            </div>
            <div className="text-center group p-4 rounded-xl hover:bg-card/50 transition-colors">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <ShieldCheck className="w-7 h-7 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">Evaluation & Observability</div>
              <div className="text-xs text-muted-foreground mt-1">LangSmith, RAGAS & DeepEval</div>
            </div>
            <div className="text-center group p-4 rounded-xl hover:bg-card/50 transition-colors">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <Cloud className="w-7 h-7 text-emerald-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">End-to-End Cloud SLA</div>
              <div className="text-xs text-muted-foreground mt-1">GCP Cloud Run, Vertex AI & AWS</div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Work Experience Section */}
      <section id="about" className="scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">About & Professional Background</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              Full Stack AI Engineer building production agentic AI systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Bio Column */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border p-6 space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary" />
                  <span>Professional Summary</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Full Stack AI Engineer with nearly 3 years of experience shipping production agentic AI. Lead for <strong className="text-foreground">Omni Exam AI</strong>, a live bilingual (EN/JA) exam SaaS built on <span className="text-primary font-medium">LangGraph</span> and <span className="text-secondary font-medium">RAG</span>.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Python, TypeScript, React/Next.js on <span className="text-primary font-medium">Google Cloud</span> and <span className="text-accent font-medium">AWS</span>. Open to full-time or contract.
                </p>

                <div className="pt-4 border-t border-border grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-muted-foreground block">Current Role:</span>
                    <span className="font-semibold text-foreground">Full Stack System Developer & AI Engineer</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Company:</span>
                    <span className="font-semibold text-foreground">Global Innovation Consulting</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Live Product:</span>
                    <a href="https://omniexamai.gicjp.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 hover:underline">
                      Omni Exam AI ↗
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Location & Time:</span>
                    <span className="font-semibold text-foreground">Yangon (UTC+6:30)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Languages:</span>
                    <span className="font-semibold text-foreground">English & Japanese (N3)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Availability:</span>
                    <span className="font-semibold text-primary">Full-Time / Contract (Remote)</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Work Experience Timeline */}
            <div id="experience" className="scroll-mt-20 lg:col-span-7 space-y-6">
              <Card className="bg-card border-border p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Work Experience</h3>
                    <p className="text-xs text-muted-foreground">Global Innovation Consulting (GIC) • Yangon, Myanmar</p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-mono text-xs">
                    January 2024 – Present
                  </Badge>
                </div>

                <div className="space-y-8">
                  {/* Position Header */}
                  <div className="relative pl-6 border-l-2 border-primary/50 space-y-6">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-background rounded-full"></div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground">Full Stack AI Engineer</h4>
                      <div className="text-sm font-medium text-primary">Global Innovation Consulting (GIC), Yangon, Myanmar</div>
                      <div className="text-xs text-muted-foreground">January 2024 – Present • Agentic AI & Production LLM Systems</div>
                    </div>

                    {/* Sub-project 1: Omni Exam AI */}
                    <div className="p-4 rounded-lg bg-card/60 border border-primary/20 space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="font-semibold text-sm text-foreground flex items-center gap-2">
                          <span className="text-emerald-400 font-bold">Omni Exam AI:</span>
                          <span>Lead for the AI product</span>
                        </div>
                        <a
                          href="https://omniexamai.gicjp.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20"
                        >
                          omniexamai.gicjp.com
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>Own a bilingual (EN/JA), multi-tenant SaaS that generates, proctors, and grades exams; <strong>live in production</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>Designed a four-agent <strong>LangGraph pipeline</strong> with RAG; 20-question exams in under 3 minutes.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>Built the <strong>React</strong> + <strong>FastAPI</strong> stack with proctoring, AI auto-grading, and PDF/Excel exports.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>Deployed on <strong>Cloud Run</strong> and <strong>Vertex AI</strong> with <strong>LangSmith</strong> and <strong>DeepEval/RAGAS</strong> CI gates.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Sub-project 2: Other AI projects for enterprise clients */}
                    <div className="p-4 rounded-lg bg-card/60 border border-border space-y-3">
                      <div className="font-semibold text-sm text-foreground">
                        Other AI projects for enterprise clients
                      </div>

                      <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Built AI customer support and enterprise management systems using <strong>LangGraph</strong> and <strong>RAG</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Developed <strong>FastAPI</strong>/<strong>Spring Boot</strong> APIs and <strong>React</strong> front ends.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Monitored latency, token usage, and output quality in production.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-card/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Technical Skills & Expertise</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              Agentic AI, LLM evaluation, full stack, and cloud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Agentic AI & LLMs */}
            <Card className="bg-background border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Agentic AI & LLMs</CardTitle>
                    <CardDescription className="text-xs">Orchestration & Tooling</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "LangGraph",
                    "LangChain",
                    "Multi-Agent Systems",
                    "RAG",
                    "Vector Databases (Pinecone)",
                    "Hybrid & Semantic Search",
                    "Model Context Protocol (MCP)",
                    "Tool Calling",
                  ].map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 2. Evaluation & Observability */}
            <Card className="bg-background border-border hover:border-secondary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Evaluation & Observability</CardTitle>
                    <CardDescription className="text-xs">Quality, Cost & Benchmarking</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "RAGAS",
                    "DeepEval",
                    "LangSmith",
                    "LLM-as-a-Judge",
                    "Latency Monitoring",
                    "Token-Cost Tracking",
                    "Output-Quality Monitoring",
                    "Agent Benchmarking",
                  ].map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 3. Backend */}
            <Card className="bg-background border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Backend</CardTitle>
                    <CardDescription className="text-xs">APIs & High Performance Services</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Python",
                    "FastAPI",
                    "TypeScript",
                    "Node.js",
                    "Java",
                    "Spring Boot",
                    "REST",
                    "gRPC",
                    "PostgreSQL",
                    "Redis",
                  ].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 4. Frontend */}
            <Card className="bg-background border-border hover:border-secondary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Frontend</CardTitle>
                    <CardDescription className="text-xs">Modern Interactive Web Apps</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "TailwindCSS / UI Systems",
                    "State Management",
                    "Proctored Exam Interfaces",
                    "AI Streaming UI",
                  ].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 5. Cloud & DevOps */}
            <Card className="bg-background border-border hover:border-accent/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Cloud & DevOps</CardTitle>
                    <CardDescription className="text-xs">GCP, AWS & CI/CD Pipelines</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Google Cloud Run",
                    "Vertex AI",
                    "Gemini API",
                    "AWS Lambda",
                    "AWS Bedrock",
                    "API Gateway",
                    "Docker",
                    "GitHub Actions",
                    "CI/CD Pre-Deploy Gates",
                    "Kubernetes (Basic)",
                  ].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 6. System Design */}
            <Card className="bg-background border-border hover:border-emerald-500/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">System Design</CardTitle>
                    <CardDescription className="text-xs">Scalability & Efficiency</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "API Design",
                    "Caching Strategies",
                    "Queue-Based Architectures",
                    "Distributed Systems Fundamentals",
                    "Cost Optimization",
                    "Performance Optimization",
                    "Multi-Tenant Isolation",
                  ].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Featured Key Projects</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              Production agentic systems, open-source benchmarking frameworks, and multi-agent AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: Omni Exam AI (Live Product) */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-emerald-500/50 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden h-56">
                  <img src="/project-assessment-portal.jpg" alt="Omni Exam AI - Live Bilingual SaaS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <Badge className="bg-emerald-600 text-white font-mono text-xs flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      Live in Production
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-xl">Omni Exam AI (Live Product)</CardTitle>
                    <a
                      href="https://omniexamai.gicjp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 p-1 transition-colors"
                      title="Open Live Product"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <CardDescription className="text-xs text-muted-foreground">
                    LangGraph · FastAPI · React · Google Cloud Run · Vertex AI · LangSmith · DeepEval
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong>Lead for the AI product:</strong> Bilingual (EN/JA) SaaS that generates, proctors, and grades exams.
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Designed a four-agent <strong>LangGraph pipeline</strong> with RAG; 20-question exams in &lt; 3 minutes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>React + FastAPI stack with proctoring, AI auto-grading, and PDF/Excel exports.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Deployed on <strong>Google Cloud Run</strong> and <strong>Vertex AI</strong> with LangSmith tracing and DeepEval/RAGAS regression gates.</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  <Badge variant="outline" className="text-xs">LangGraph Multi-Agent</Badge>
                  <Badge variant="outline" className="text-xs">FastAPI</Badge>
                  <Badge variant="outline" className="text-xs">React</Badge>
                  <Badge variant="outline" className="text-xs">Cloud Run</Badge>
                  <Badge variant="outline" className="text-xs">Vertex AI</Badge>
                  <Badge variant="outline" className="text-xs">LangSmith</Badge>
                </div>
                <a
                  href="https://omniexamai.gicjp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" size="sm" className="w-full border-emerald-500/40 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500 bg-emerald-500/5">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live SaaS (omniexamai.gicjp.com)
                  </Button>
                </a>
              </div>
            </Card>

            {/* Project 2: Agent Evaluation Suite (Open Source) */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden h-56">
                  <img src="/project-agent-eval.jpg" alt="Agent Evaluation Suite (Open Source)" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground font-mono text-xs">
                      Open Source Framework
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-xl">Agent Evaluation Suite (Open Source)</CardTitle>
                    <a
                      href="https://github.com/zweyaungnitun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-foreground p-1 transition-colors"
                      title="Open GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <CardDescription className="text-xs text-muted-foreground">
                    RAGAS · DeepEval · LangSmith · GitHub Actions · CI/CD
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Created an open-source evaluation framework for testing and benchmarking AI and agent-based applications.
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Built a reusable framework to test and benchmark AI and agent-based applications, combining <strong>RAGAS</strong>, <strong>DeepEval</strong>, and <strong>LangSmith</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Automated evaluation, metric scoring, and regression reporting through <strong>GitHub Actions</strong> for continuous integration.</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  <Badge variant="outline" className="text-xs">RAGAS</Badge>
                  <Badge variant="outline" className="text-xs">DeepEval</Badge>
                  <Badge variant="outline" className="text-xs">LangSmith</Badge>
                  <Badge variant="outline" className="text-xs">GitHub Actions</Badge>
                  <Badge variant="outline" className="text-xs">CI/CD Gates</Badge>
                </div>
                <a
                  href="https://github.com/zweyaungnitun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" size="sm" className="w-full border-accent/40 text-accent hover:text-accent-foreground hover:border-accent bg-accent/5">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub (github.com/zweyaungnitun)
                  </Button>
                </a>
              </div>
            </Card>

            {/* Project 3: Agentic Job Matcher (AI-Resume-Job-Matching-Agent) */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden h-56">
                  <img src="/project-resume-match.jpg" alt="Agentic Job Matcher - AI Resume & Job Matching Agent" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground font-mono text-xs">
                      Open Source / GitHub Repo
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-xl">Agentic Job Matcher</CardTitle>
                    <a
                      href="https://github.com/zweyaungnitun/AI-Resume-Job-Matching-Agent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 p-1 transition-colors"
                      title="Open GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <CardDescription className="text-xs text-muted-foreground">
                    Python · FastAPI · React · TypeScript · LangChain · Gemini AI · Pinecone · PostgreSQL
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    An intelligent multi-agent system that analyzes CVs, matches candidates with relevant job postings using <strong>RAG and autonomous decision-making</strong>, and recommends actionable resume improvements.
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Multi-Source Job Search:</strong> Finds and ranks job opportunities using <strong>Pinecone vector RAG</strong> combined with real-time web search.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>4-Factor Intelligent Scoring:</strong> Computes 0–100 compatibility scores based on skill alignment (40%), role relevance (30%), experience (20%), and growth potential (10%).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>CV Review & Recommendations:</strong> Autonomous agent extracts skills, identifies gaps, and generates targeted resume suggestions for each role.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Full Stack & Security:</strong> Built with FastAPI, JWT & Google OAuth auth, RBAC admin dashboard, and responsive React + TypeScript UI.</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  <Badge variant="outline" className="text-xs">FastAPI</Badge>
                  <Badge variant="outline" className="text-xs">React + TypeScript</Badge>
                  <Badge variant="outline" className="text-xs">LangChain</Badge>
                  <Badge variant="outline" className="text-xs">Pinecone RAG</Badge>
                  <Badge variant="outline" className="text-xs">Gemini AI</Badge>
                  <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                </div>
                <a
                  href="https://github.com/zweyaungnitun/AI-Resume-Job-Matching-Agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" size="sm" className="w-full border-primary/40 text-primary hover:text-primary-foreground hover:bg-primary/90 hover:border-primary bg-primary/5">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub (AI-Resume-Job-Matching-Agent)
                  </Button>
                </a>
              </div>
            </Card>

            {/* Project 4: Customer Support RAG Assistant */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-secondary/50 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden h-56">
                  <img src="/project-customer-support-rag.jpg" alt="Customer Support RAG Assistant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-secondary-foreground font-mono text-xs">
                      Enterprise RAG
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Customer Support RAG Assistant</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    LangGraph · Pinecone · Claude
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Engineered an intelligent enterprise support assistant combining vector indexing with dynamic agentic orchestration.
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Built a multi-turn support chatbot with semantic search over support documentation in <strong>Pinecone</strong> and <strong>LangGraph</strong> orchestration.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Integrated with Claude to deliver precise, context-aware answers while preventing hallucinations.</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  <Badge variant="outline" className="text-xs">LangGraph</Badge>
                  <Badge variant="outline" className="text-xs">Pinecone</Badge>
                  <Badge variant="outline" className="text-xs">Claude</Badge>
                  <Badge variant="outline" className="text-xs">Semantic Search</Badge>
                  <Badge variant="outline" className="text-xs">Hybrid Search</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Qualifications Section */}
      <section id="certifications" className="scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Certifications & Qualifications</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              Recognized credentials in Computer Science, Agentic AI, RAG Systems, and Enterprise Generative AI across Japan and international standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ITPEC FE */}
            <Card className="bg-background border-border p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-foreground">ITPEC Fundamental IT Engineer (FE)</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Japan-recognized IT engineer exam, officially recognized as equivalent to a Bachelor's-level Computer Science credential across Japan and Southeast Asia.
                  </p>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                    CS Degree Equivalent
                  </Badge>
                </div>
              </div>
            </Card>

            {/* AI Engineer for Developers Associate */}
            <Card className="bg-background border-border p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-foreground">AI Engineer for Developers Associate</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Professional certification in AI application development, model orchestration, and cloud AI services.
                  </p>
                  <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                    AI Associate Certificate
                  </Badge>
                </div>
              </div>
            </Card>

            {/* IBM RAG & Agentic AI */}
            <Card className="bg-background border-border p-6 hover:border-secondary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary flex-shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-foreground">IBM RAG and Agentic AI Professional</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Professional certification in engineering advanced Retrieval-Augmented Generation architectures and multi-agent AI systems.
                  </p>
                  <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                    Agentic AI Professional
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Oracle Generative AI Professional */}
            <Card className="bg-background border-border p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-foreground">Oracle Generative AI Professional</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Enterprise Generative AI platform architecture, LLM deployment, fine-tuning, and scalable inference.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    GenAI Certified
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Languages */}
            <Card className="bg-background border-border p-6 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-foreground">Languages</h3>
                  <div className="text-xs space-y-1.5 text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>• <strong>English:</strong></span>
                      <span className="font-medium text-foreground">Professional Working</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>• <strong>Japanese:</strong></span>
                      <span className="font-medium text-foreground">JLPT N3 Certified</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                    Bilingual Engineering
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Remote & Work Arrangement */}
            <Card className="bg-background border-border p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-foreground">Work Arrangement</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Comfortable in fast-shipping, fully remote teams. Open to <strong>full-time</strong> or <strong>contract</strong> engagements worldwide.
                  </p>
                  <Badge variant="outline" className="text-xs text-primary border-primary/30">
                    Yangon (UTC+6:30) • Remote
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Get In Touch</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              Interested in collaborating on production agentic AI systems, LangGraph pipelines, or full-time / contract roles? Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Send a Message</span>
                </CardTitle>
                <CardDescription className="text-xs">
                  Reach out for production AI collaboration, Omni Exam AI inquiries, or engineering roles.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="bg-background/50 backdrop-blur-sm border-secondary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Mail className="w-5 h-5 text-secondary" />
                    <span>Contact Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 text-sm">
                  {/* Omni Exam AI */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium text-xs text-muted-foreground">Live Product (Lead AI Engineer)</div>
                      <a href="https://omniexamai.gicjp.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-mono text-sm transition-colors">
                        omniexamai.gicjp.com ↗
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-xs text-muted-foreground">Email</div>
                      <a href="mailto:zweyaungnitun2020@gmail.com" className="text-foreground hover:text-primary font-mono text-sm transition-colors">
                        zweyaungnitun2020@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-xs text-muted-foreground">Phone</div>
                      <a href="tel:+959984067356" className="font-mono text-sm text-foreground hover:text-secondary transition-colors">
                        +95 9984067356
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-xs text-muted-foreground">Location & Remote Work</div>
                      <div className="text-sm text-foreground">Yangon, Myanmar (UTC+6:30) • Remote Worldwide</div>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-xs text-muted-foreground">GitHub</div>
                      <a href="https://github.com/zweyaungnitun" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary font-mono text-sm transition-colors">
                        github.com/zweyaungnitun
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-xs text-muted-foreground">LinkedIn</div>
                      <a href="https://www.linkedin.com/in/zwe-yaung-ni-tun-476979211" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary font-mono text-sm transition-colors">
                        linkedin.com/in/zwe-yaung-ni-tun-476979211
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent p-2 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-mono text-base font-bold gradient-text">Zwe Yaung Ni Tun</div>
                  <div className="text-xs text-muted-foreground">Full Stack System Developer & End-to-End AI Engineer</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground max-w-md leading-relaxed">
                Full Stack AI Engineer with nearly 3 years of experience building and shipping production agentic AI systems. Lead for Omni Exam AI. Strong across LangGraph, Python (FastAPI), React/Next.js, GCP & AWS.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://omniexamai.gicjp.com" target="_blank" rel="noopener noreferrer" aria-label="Omni Exam AI" className="text-muted-foreground hover:text-emerald-400 transition-colors" title="Omni Exam AI">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="https://github.com/zweyaungnitun" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub" title="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/zwe-yaung-ni-tun-476979211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn" title="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:zweyaungnitun2020@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email" title="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Quick Links</h4>
              <div className="space-y-2 text-xs">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">Experience</a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#certifications" className="block text-muted-foreground hover:text-primary transition-colors">Certifications</a>
                <a href="https://omniexamai.gicjp.com" target="_blank" rel="noopener noreferrer" className="block text-emerald-400 hover:text-emerald-300 transition-colors">Omni Exam AI ↗</a>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Core Stack</h4>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div>LangGraph & Multi-Agent</div>
                <div>LangSmith, RAGAS & DeepEval</div>
                <div>Python (FastAPI) & TypeScript</div>
                <div>React & Next.js</div>
                <div>Google Cloud Run & Vertex AI</div>
                <div>AWS Lambda & Bedrock</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div>
              © 2026 Zwe Yaung Ni Tun. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Full Stack & AI Engineer Portfolio</span>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chatbot Component */}
      <AIChatbot />
    </div>
  )
}
