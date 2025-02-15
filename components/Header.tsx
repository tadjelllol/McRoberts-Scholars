import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-[hsl(222.2,84%,4.9%)] border-b border-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Untitled.png"
              alt="McRoberts Scholars Logo"
              width={40}
              height={40}
              className="rounded-full bg-white p-0.5"
            />
            <span className="text-2xl font-bold text-white">McRoberts Scholars</span>
          </Link>
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/scholarships" className="text-white hover:text-secondary transition-colors">
                Scholarships
              </Link>
            </li>
            <li>
              <Link href="/ai-assistant" className="text-white hover:text-secondary transition-colors">
                AI Assistant
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-white hover:text-secondary transition-colors">
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

