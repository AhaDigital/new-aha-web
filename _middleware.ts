import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/ej-i-tjanst', request.url))
}

export const config = {
  matcher: [
    '/english/:path*',
    '/kakor/:path*',
    '/kontakt/:path*',
    '/om-aha/:path*',
    '/tjanster/:path*',
    '/universell-utformning-och-tillganglighet/:path*',
    '/uppdrag/:path*',
    '/webbplatskarta/:path*',
    '/',
  ],
}
