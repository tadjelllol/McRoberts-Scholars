"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import Image from "next/image"

export default function AIAssistant() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setIsLoading(true)
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      const assistantMessage = data.choices[0].message

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted px-4 py-8">
      <section className="hero-pattern text-white py-20 border-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to McRoberts Scholars</h1>
              <p className="text-xl mb-8 text-secondary">Empowering students with scholarship opportunities</p>
              <Link
                href="/scholarships"
                className="bg-accent text-bg-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 inline-block"
              >
                Explore Scholarships
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="animate-float">
                <Image
                  src="/Untitled.png"
                  alt="McRoberts Scholars Logo"
                  width={300}
                  height={300}
                  className="rounded-full bg-white p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-zinc-100 mb-8">AI Assistant</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden gradient-border">
          <div className="h-[600px] overflow-y-auto p-6 space-y-4 bg-background rounded-lg">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-4 rounded-lg card-hover ${
                  message.role === "user" ? "ml-auto bg-[#2F5C7E] text-white" : "mr-auto bg-gray-100 text-gray-900"
                }`}
              >
                {message.role === "assistant" ? (
                  <ReactMarkdown className="prose prose-sm max-w-none">{message.content}</ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
            ))}
          </div>
          <div className="border-t p-4 bg-gray-50 flex gap-2 gradient-border rounded-b-lg">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-grow text-zinc-900 bg-zinc-300 p-3 rounded-lg"
              disabled={isLoading}
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-accent text-accent-foreground hover:bg-opacity-90 p-3"
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

