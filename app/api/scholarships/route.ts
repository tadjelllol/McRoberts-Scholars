import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "scholarships.txt")
    const content = await fs.promises.readFile(filePath, "utf8")
    const scholarships = JSON.parse(content)
    return NextResponse.json(scholarships)
  } catch (error) {
    console.error("Error reading scholarships:", error)
    return NextResponse.json({ error: "Failed to load scholarships" }, { status: 500 })
  }
}

