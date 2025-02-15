"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AIAssistant() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // TODO: Implement API call to Mistral here
    // For now, we'll just echo the message
    setMessages((prev) => [...prev, { role: "assistant", content: `You said: ${input}` }])

    setInput("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Assistant</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="h-96 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-blue-100" : "bg-gray-100"}`}
              >
                {message.content}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-grow"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  )
}

