'use client'

import { AuthForm, AuthFormData } from "@/components/auth/auth-form"
import { authClient } from "@/lib/auth-client"


export default function SignInPage() {

    const handleSignIn = async (data: AuthFormData) => {
        const { data: signInResponse, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });
        console.log('signup response', signInResponse, error)
    }
    return <AuthForm mode="signin" onSubmit={handleSignIn} />
}
