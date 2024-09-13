"use client"
import { SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation"; 
import { useEffect } from "react";
import "./logincss.css";

export default function SignInPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter(); 

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);


  return (
    <div className="contenedor-login">
      {!isSignedIn && (
        <SignIn
          path="/login"
          signUpUrl={null}
          signInButton={true}
        />
      )}
    </div>
  );
}
