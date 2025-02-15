import { Button } from "@/components/ui/button"

export default function Resources() {
  const resources = [
    { id: 1, title: "Scholarship Application Tips", type: "Video", link: "#" },
    { id: 2, title: "Essay Writing Workshop", type: "Document", link: "#" },
    { id: 3, title: "Interview Preparation Guide", type: "Video", link: "#" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-4">Type: {resource.type}</p>
            <Button asChild>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                View Resource
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

