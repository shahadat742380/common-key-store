// import { env } from "@/config/env";
import { NextResponse } from "next/server";

export async function GET() {
    const SECRET = process.env.STRIPE_SECRET_KEY;

    return NextResponse.json(
      { error: `SECRET is: ${SECRET}` },
      { status: 200 }
    );
  }
  