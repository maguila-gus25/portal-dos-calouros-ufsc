import { NextResponse } from "next/server";
import { listSections } from "@/lib/content";

export function GET() {
  return NextResponse.json(listSections());
}
