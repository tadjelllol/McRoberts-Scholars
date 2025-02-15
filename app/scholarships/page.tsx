"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Scholarships() {
  const [searchTerm, setSearchTerm] = useState("")
  const [scholarships, setScholarships] = useState([
    { id: 1, name: "STEM Excellence Scholarship", deadline: "2023-12-31", amount: "$5000" },
    { id: 2, name: "Future Leaders Grant", deadline: "2023-11-30", amount: "$3000" },
    { id: 3, name: "Arts and Creativity Fund", deadline: "2023-10-15", amount: "$2500" },
  ])

  const filteredScholarships = scholarships.filter((scholarship) =>
    scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Scholarships</h1>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search scholarships..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScholarships.map((scholarship) => (
          <div key={scholarship.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{scholarship.name}</h2>
            <p className="text-gray-600 mb-2">Deadline: {scholarship.deadline}</p>
            <p className="text-gray-600 mb-4">Amount: {scholarship.amount}</p>
            <Button>Apply Now</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

