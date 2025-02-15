"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-background text-foreground py-4 px-6 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          McRoberts Scholars
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/scholarships" className="hover:text-accent">
            Scholarships
          </Link>
          <Link href="/ai-assistant" className="hover:text-accent">
            AI Assistant
          </Link>
          <Link href="/resources" className="hover:text-accent">
            Resources
          </Link>
        </nav>
        <Button className="hidden md:block bg-accent text-accent-foreground hover:bg-opacity-90">Join Discord</Button>
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/scholarships" className="hover:text-accent">
              Scholarships
            </Link>
            <Link href="/ai-assistant" className="hover:text-accent">
              AI Assistant
            </Link>
            <Link href="/resources" className="hover:text-accent">
              Resources
            </Link>
            <Button className="bg-accent text-accent-foreground hover:bg-opacity-90 w-full">Join Discord</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

