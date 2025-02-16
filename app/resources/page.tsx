"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
        let { data, error } = await supabase.from("resources").select("*");

        if (error) {
          throw error;
        }

        if (data) {
          setResources(data);
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
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    {resource.title}
                  </h2>
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
