import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabaseClient";

export async function POST(req: Request) {
  try {
    const { email, password, username } = await req.json();

    if (!email || !password || !username) {
      return NextResponse.json(
        { error: "All fields (email, password, username) are required." },
        { status: 400 }
      );
    }

    const redirectUrl =
      process.env.NODE_ENV === "production"
        ? `https://${process.env.VERCEL_URL}/verify-email?email=${email}`
        : `http://localhost:3000/verify-email?email=${email}`;

    console.log("Redirect URL:", redirectUrl);

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
        emailRedirectTo: redirectUrl,
      },
    });

    console.log("Auth Data:", authData);
    console.log("Auth Error:", authError);

    if (authError) {
      return NextResponse.json(
        { error: `Auth Error: ${authError.message}` },
        { status: 400 }
      );
    }

    const userId = authData.user?.id;
    if (!userId) {
      return NextResponse.json(
        { error: "Failed to retrieve user ID after signup." },
        { status: 500 }
      );
    }

    const { error: profileError } = await supabase.from("profiles").insert({
      id: userId,
      username,
    });

    if (profileError) {
      return NextResponse.json(
        { error: `Profile Error: ${profileError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "User created successfully. Check your email to verify your account.",
    });
  } catch (error) {
    console.error("Sign-up Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during sign-up." },
      { status: 500 }
    );
  }
}
