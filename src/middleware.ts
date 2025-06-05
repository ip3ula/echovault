export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    '/create',
    '/dashboard',
    '/api/capsules/:path*', 
  ]
}