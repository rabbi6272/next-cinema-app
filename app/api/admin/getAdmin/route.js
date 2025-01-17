import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import Admin from "@/model/adminSchema.model";
import { connectDB } from "@/lib/DB/connectDB";

export async function GET(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ status: 401 });
  }
  try {
    await connectDB();

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);
    if (!admin) {
      return NextResponse.json({ status: 401 });
    }
    return NextResponse.json({ user: admin }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
