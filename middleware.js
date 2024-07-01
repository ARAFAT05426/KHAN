import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = async (request) => {
  const token = await cookies(request).get("session");
  console.log(`Token: ${token}`);

  if (!token) {
    console.log("Redirecting to login page (missing token)");
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    console.log("Valid token found, proceeding to dashboard");
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", ],
};
