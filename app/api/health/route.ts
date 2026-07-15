import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ status: "ok", version: "2.0.0", env: process.env.NODE_ENV });
}
