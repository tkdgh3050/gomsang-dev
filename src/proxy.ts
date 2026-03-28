import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Public paths that don't need auth
  const publicPaths = ['/login', '/favicon.ico', '/api/chat'];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));
  
  // Skip static files and images
  const isStaticFile = pathname.startsWith('/_next') || pathname.startsWith('/images');
  
  if (isPublicPath || isStaticFile) {
    return NextResponse.next();
  }

  const authToken = request.cookies.get('portfolio-auth');

  if (!authToken) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

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
