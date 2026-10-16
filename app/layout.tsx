import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zwe Yaung Ni Tun | Full Stack System Developer & End-to-End AI Engineer',
  description: 'Portfolio of Zwe Yaung Ni Tun, Full Stack System Developer & End-to-End AI Engineer with nearly 3 years experience building scalable full-stack web architectures, microservices, and production agentic AI systems (React/Next.js, FastAPI, Node.js, PostgreSQL, LangGraph, GCP, AWS). Lead for Omni Exam AI.',
  keywords: ['Full Stack System Developer', 'End-to-End AI Engineer', 'Full Stack AI Engineer', 'Full Stack Developer', 'Agentic AI', 'Production LLM Systems', 'Omni Exam AI', 'LangGraph', 'Multi-Agent', 'RAG', 'RAGAS', 'DeepEval', 'LangSmith', 'FastAPI', 'Node.js', 'PostgreSQL', 'React', 'Next.js', 'GCP', 'Vertex AI', 'AWS', 'Zwe Yaung Ni Tun'],
  authors: [{ name: 'Zwe Yaung Ni Tun' }],
  openGraph: {
    type: 'website',
    title: 'Zwe Yaung Ni Tun | Full Stack System Developer & End-to-End AI Engineer',
    description: 'Production agentic AI systems, LangGraph multi-agent pipelines, and scalable full-stack architectures. Lead for Omni Exam AI.',
    images: ['/zwe-yaung-ni-tun.jpg'],
  },
  twitter: {
    card: 'summary',
    title: 'Zwe Yaung Ni Tun | Full Stack System Developer & End-to-End AI Engineer',
    description: 'Production agentic AI systems, LangGraph multi-agent pipelines, and scalable full-stack architectures.',
    images: ['/zwe-yaung-ni-tun.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
