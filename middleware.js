import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = async (request) => {
  // Attempt to retrieve session token from cookies
  const token = await cookies(request).get("session");
  console.log(`Token: ${token}`);

  if (!token) {
    console.log("Redirecting to login page (missing token)");
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    console.log("Valid token found, proceeding to dashboard");
  }

  // You can optionally add logic here to handle the request 
  // if the token is valid (e.g., fetch user data)

  // By default, allow the request to proceed
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", "/dashboard/api", ],
};
