"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await fetch("/api/resources");
        const data = await res.json();
        setResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md text-zinc-800">
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
  );
}
