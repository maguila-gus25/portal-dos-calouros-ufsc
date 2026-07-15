import { NextResponse } from "next/server";
import { getSection } from "@/lib/content";

export function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const section = getSection(slug);
    if (!section) return NextResponse.json({ detail: "Not found" }, { status: 404 });
    return NextResponse.json(section);
  });
}
