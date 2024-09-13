import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: "base auth",
  description: "",
};

export default function RootLayout({ children }) {
  // Asegúrate de que la variable de entorno esté disponible en tu código
  // const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

  return (
    // <ClerkProvider frontendApi={clerkFrontendApi}>
    <ClerkProvider>
      <html lang="es">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
