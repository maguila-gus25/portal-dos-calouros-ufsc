import { NextResponse } from "next/server";
import { getCourse } from "@/lib/content";

export function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const course = getCourse(slug);
    if (!course) return NextResponse.json({ detail: "Not found" }, { status: 404 });
    return NextResponse.json(course);
  });
}
