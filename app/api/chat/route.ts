import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const SYSTEM_PROMPT = `You are a helpful assistant for McRoberts Scholars. Use the knowledge base to answer questions concisely and only provide relevant information. Format your responses using markdown for better readability:

- Use **bold** for important information
- Use bullet points for lists
- Use headings (##) to organize longer responses
- Format links as *[clickable links](https://example.com)* and display them in blue

Example response format:

**Meeting Time:** Wednesdays at 3:30 PM  
**Location:** Room 201

## Scholarship Process:
- **Step 1:** Browse available scholarships on our website.
- **Step 2:** Check eligibility requirements.
- **Step 3:** Prepare required documents.
- **Step 4:** Submit applications before deadlines.
- **Step 5:** Attend workshops for application tips.

For more help:
- *[Discord](https://discord.gg/j8SP6zxraN)*  
- *[Email](mailto:mcrobertsscholars@gmail.com)*`

// Function to read the knowledge base file
async function readKnowledgeBase() {
  const filePath = path.join(process.cwd(), "data", "knowledge.txt")
  try {
    const content = await fs.promises.readFile(filePath, "utf8")
    return content
  } catch (error) {
    console.error("Error reading knowledge base:", error)
    return ""
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const knowledgeBase = await readKnowledgeBase()

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-tiny",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          ...messages,
          {
            role: "system",
            content: `Relevant Knowledge Base Content:\n${knowledgeBase}`,
          }
        ],
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in chat route:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
