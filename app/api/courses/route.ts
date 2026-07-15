import { NextResponse } from "next/server";
import { listCourses } from "@/lib/content";

export function GET() {
  return NextResponse.json(listCourses());
}
