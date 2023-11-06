import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get a cookie
  // let name = request.cookies.get("username")?.value;
  // Get all cookies
  let tokens = request.cookies.getAll();
  // console.log(tokens);
  console.log(tokens);

  // if (name !== "nahid") {
  //   return NextResponse.rewrite(new URL("/Admin/auth/Login", request.url));
  // }
}

export const config = {
  matcher: ["/Admin/dashboard/:path*"],
};
