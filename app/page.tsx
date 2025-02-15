import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-white">
      <section className="hero-pattern text-white py-20 border-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-6">Welcome to McRoberts Scholars</h1>
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

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="gradient-border">
            <div className="p-6 card-hover bg-zinc-900">
              <h2 className="text-2xl font-semibold mb-4 text-white">Scholarships</h2>
              <p className="text-zinc-200 mb-4">
                Discover and apply for a wide range of scholarships tailored for McRoberts students.
              </p>
              <Link href="/scholarships" className="text-accent font-semibold hover:text-secondary transition-colors">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="gradient-border">
            <div className="p-6 card-hover bg-zinc-900">
              <h2 className="text-2xl font-semibold mb-4 text-white">AI Assistant</h2>
              <p className="text-zinc-200 mb-4">
                Get instant answers to your questions about scholarships and applications.
              </p>
              <Link href="/ai-assistant" className="text-accent font-semibold hover:text-secondary transition-colors">
                Chat Now →
              </Link>
            </div>
          </div>

          <div className="gradient-border">
            <div className="p-6 card-hover bg-zinc-900">
              <h2 className="text-2xl font-semibold mb-4 text-white">Resources</h2>
              <p className="text-zinc-200 mb-4">
                Access meeting videos, guides, and other helpful content for your scholarship journey.
              </p>
              <Link href="/resources" className="text-accent font-semibold hover:text-secondary transition-colors">
                View Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(217.2,32.6%,17.5%)] border-white border-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">Join Our Community</h2>
          <p className="text-xl text-secondary mb-8">
            Connect with fellow scholars and stay updated on the latest opportunities.
          </p>
          <a
            href="https://discord.gg/j8SP6zxraN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 inline-block"
          >
            Join Our Discord
          </a>
        </div>
      </section>
    </div>
  )
}

