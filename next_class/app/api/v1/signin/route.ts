import { NextRequest, NextResponse } from "next/server";
import client from "../../../lib/db";
export async function POST(req: NextRequest) {
  const data = await req.json();

  const response = await client.user.create({
    data: {
      username: data.username,
      password: data.password,
    },
  });
  console.log(response);

  return NextResponse.json({ message: "Signed up successfully" });
}
