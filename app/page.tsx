import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Mcroberts Scholars</h1>
        <p className="text-xl text-gray-600 mb-8">Empowering students with scholarship opportunities</p>
        <Link
          href="/scholarships"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore Scholarships
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Scholarships</h2>
          <p className="text-gray-600 mb-4">
            Discover and apply for a wide range of scholarships tailored for Mcroberts students.
          </p>
          <Link href="/scholarships" className="text-blue-600 font-semibold hover:underline">
            Learn More
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">AI Assistant</h2>
          <p className="text-gray-600 mb-4">
            Get instant answers to your questions about scholarships and applications.
          </p>
          <Link href="/ai-assistant" className="text-blue-600 font-semibold hover:underline">
            Chat Now
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Resources</h2>
          <p className="text-gray-600 mb-4">
            Access meeting videos, guides, and other helpful content for your scholarship journey.
          </p>
          <Link href="/resources" className="text-blue-600 font-semibold hover:underline">
            View Resources
          </Link>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-xl text-gray-600 mb-8">
          Connect with fellow scholars and stay updated on the latest opportunities.
        </p>
        <a
          href="https://discord.gg/j8SP6zxraN"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Join Our Discord
        </a>
      </section>
    </div>
  )
}

