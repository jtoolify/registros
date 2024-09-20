import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});



// Protege todas las rutas bajo /admin y las API routes
export const config = {
  // matcher: ["/dashboard/:path*", "/(api|trpc)(.*)"], 
  matcher: ["/dashboard/:path*"], 
};