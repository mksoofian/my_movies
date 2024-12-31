import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { pin } = body;


  // The secret PIN should be set as an environment variable
  //   const adminPin = process.env.ADMIN_PIN;
  const adminPin = 1234;

  if (!adminPin) {
    return NextResponse.json({ error: "Admin PIN not set" }, { status: 500 });
  }

  if (pin == adminPin) {
    return NextResponse.json({
      success: true,
      message: "PIN verified successfully",
    });
  } else {
    return NextResponse.json(
      { success: false, message: "Incorrect PIN" },
      { status: 401 }
    );
  }
}
