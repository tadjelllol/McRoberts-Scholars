"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const res = await fetch("/api/resources");
      const data = await res.json();
      setResources(data);
    };

    fetchResources();
  }, []);

  return (
    <div className="min-h-screen bg-muted p-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-primary text-white">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="gradient-border">
              <div className="p-6 card-hover bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2 text-white">{resource.title}</h2>
                <p className="text-white mb-4">Type: {resource.type}</p>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-opacity-90">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    View Resource
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
