import { NextResponse } from "next/server";
import { getCenter } from "@/lib/content";

export function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const center = getCenter(slug);
    if (!center) return NextResponse.json({ detail: "Not found" }, { status: 404 });
    return NextResponse.json(center);
  });
}
