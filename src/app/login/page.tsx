'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import Form from "../ui/components/Form";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(""); 
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
            callbackUrl: "/dashboard"
        });

        if (res?.error) {
            setMessage("wrong email or password");
            setTimeout(() => setMessage(""), 5000); 
        } else if (res?.ok) {
            window.location.href = res.url || "/dashboard";
        }
    };

    const form = {
        headline: "Sign In to EchoVault",
        subHeadline: "Enter your credentials to access your account",
        fields: [
            {
                name: "email",
                type: "email" as const,
                placeholder: "Email",
                value: email,
                onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(e.target.value),
                required: true,
            },
            {
                name: "password",
                type: "password" as const,
                placeholder: "Password",
                value: password,
                onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(e.target.value),
                required: true,
            },
        ],
        buttons: [
            { name: "Log In", type: "submit" as const, onClick: handleSubmit },
            { name: "Continue with Google", type: "button" as const, onClick: () => signIn("google", { callbackUrl: "/dashboard" }) }
        ],
        additionalLinks: [
            { text: "Don't have an account?", linkText: "Sign Up", href: "/register" },
            { text: "Forgot your password?", linkText: "Reset Password", href: "/reset" }
        ],
        message
    };

    return (
        <div className="py-20 sm:py-40 flex items-center justify-center">
            <Form form={form} />
        </div>
    );
}