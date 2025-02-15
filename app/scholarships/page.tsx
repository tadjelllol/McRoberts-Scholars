"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Scholarships() {
  const [searchTerm, setSearchTerm] = useState("")
  const [scholarships, setScholarships] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchScholarships() {
      try {
        const response = await fetch("/api/scholarships")
        if (!response.ok) throw new Error("Failed to fetch")
        const data = await response.json()
        setScholarships(data)
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchScholarships()
  }, [])

  const filteredScholarships = scholarships.filter((scholarship) =>
    scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Loading scholarships...</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8" >
      <h1 className="text-4xl font-bold text-zinc-100 mb-8">Available Scholarships</h1>
      <div className="mb-8 ">
        <Input
          type="text"
          placeholder="Search scholarships..."
         
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md text-zinc-900 bg-zinc-300"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filteredScholarships.map((scholarship) => (
          <div key={scholarship.id} className="gradient-border">
            <div className="p-6 card-hover">
              <h2 className="text-xl font-semibold textwhite mb-2">{scholarship.name}</h2>
              <p className="text-zinc-100 mb-2">Deadline: {scholarship.deadline}</p>
              <p className="text-zinc-100 mb-2">Amount: {scholarship.amount}</p>
              <p className="text-zinc-100 mb-4">{scholarship.description}</p>
              <p className="text-sm text-zinc-100 mb-4">Requirements: {scholarship.requirements}</p>
              <Button className="bg-accent text-accent-foreground hover:bg-opacity-90">Apply Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

