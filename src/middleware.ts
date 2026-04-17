import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "bridgetogrants-dev-secret-change-in-prod"
);

async function hasValidSession(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get("session")?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = await hasValidSession(request);

  // GATED ROUTES (10/10 Hybrid Strategy)
  const isGatedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/matcha") ||
    pathname.startsWith("/process") ||
    pathname.startsWith("/verktyg/checklista") ||
    pathname.startsWith("/verktyg/kalkylator");

  if (isGatedRoute && !isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  // Redirect logged-in users away from auth pages
  const isAuthRoute = pathname === "/login" || pathname === "/register";
  if (isAuthRoute && isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/matcha/:path*", "/process/:path*", "/verktyg/(checklista|kalkylator)/:path*", "/login", "/register"],
};
