import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, // Your Supabase URL
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // Your Supabase anonymous key
)

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('scholarships') // Assuming your table is called 'scholarships'
      .select('*')

    if (error) {
      throw error
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching scholarships:", error)
    return NextResponse.json({ error: "Failed to load scholarships" }, { status: 500 })
  }
}
