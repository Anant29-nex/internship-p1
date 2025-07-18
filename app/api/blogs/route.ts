import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileContents);

  return NextResponse.json(blogs);
}
