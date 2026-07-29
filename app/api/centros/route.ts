import { NextResponse } from "next/server";
import { listCenters } from "@/lib/content";

export function GET() {
  return NextResponse.json(listCenters());
}
