"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Resource = {
  id: string;
  title: string;
  type: string;
  link: string;
};

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await fetch("/api/resources");
        const data: Resource[] = await res.json();

        // Ensure data has valid structure
        if (Array.isArray(data) && data.every(item => "id" in item && "title" in item)) {
          setResources(data);
        } else {
          console.error("Invalid resource data format:", data);
        }
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="min-h-screen bg-muted p-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.length > 0 ? (
            resources.map((resource) => (
              <div key={resource.id} className="gradient-border">
                <div className="p-6 card-hover bg-white rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-2 text-white">{resource.title}</h2>
                  <p className="text-zinc-300 mb-4">Type: {resource.type}</p>
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-opacity-90">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      View Resource
                    </a>
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-3">No resources available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
