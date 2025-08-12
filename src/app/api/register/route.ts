import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: "Email and password required" }),
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });
    return new Response(JSON.stringify({ id: user.id, email: user.email }), {
      status: 201,
    });
  } catch {
    return new Response(JSON.stringify({ error: "User already exists" }), {
      status: 409,
    });
  }
}
