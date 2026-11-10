'use client'

import { AuthForm,AuthFormData } from "@/components/auth/auth-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    
            const router = useRouter();

    const handleSignUp = async (data: AuthFormData) => {
        const { data: signUpResponse, error } = await authClient.signUp.email({
            name: data.name as string, 
            email: data.email, 
            password: data.password,
            role: data.role,
            callbackURL: "/", 
        });

        console.log('signup response', signUpResponse, error)
        if (!error) {
            router.refresh()
            router.push('/')
        }
    }

    return <AuthForm mode="signup" onSubmit={handleSignUp} />
}
