import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export default function middleware(req) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. localhost:3000, shield.startupgrow.com)
  const hostname = req.headers.get('host') || '';

  // If the hostname starts with "shield.", rewrite to the /shield route
  if (hostname.startsWith('shield.')) {
    // Prevent infinite loop if already on /shield
    if (!url.pathname.startsWith('/shield')) {
      return NextResponse.rewrite(new URL(`/shield${url.pathname === '/' ? '' : url.pathname}`, req.url));
    }
  }

  return NextResponse.next();
}
