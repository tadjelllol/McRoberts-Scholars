import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Locate the file in the 'data' folder outside 'app'
    const filePath = path.join(process.cwd(), "data", "resources.txt");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Convert each line into a JSON object
    const resources = fileContent
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line));

    return new Response(JSON.stringify(resources), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to load resources" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
