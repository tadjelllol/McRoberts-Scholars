import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Mcroberts Scholars
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/scholarships" className="text-gray-600 hover:text-blue-600">
                Scholarships
              </Link>
            </li>
            <li>
              <Link href="/ai-assistant" className="text-gray-600 hover:text-blue-600">
                AI Assistant
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-gray-600 hover:text-blue-600">
                Resources
              </Link>
            </li>
            <li>
              <Button asChild variant="outline">
                <Link href="/signin">Sign In</Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

