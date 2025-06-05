'use client'
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "../ui/components/Form";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });
        if (res.ok) {
            router.push("/login");
        } else {
            const data = await res.json();
            setMessage(data.message || "Registration failed");
            console.log(data.error)
        }
    };

    const handleGoogle = () => {
        signIn("google", { callbackUrl: "/dashboard" });
    };

    const form = {
        headline: 'Create Your Time Capsule Account',
        subHeadline: "Start saving messages, memories, and moments for the future. It only takes a minute to begin your journey.",
        fields: [
            { name: 'Name', type: 'text' as const, value: name, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value) },
            { name: 'Email', type: 'email' as const, value: email, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) },
            { name: 'Password', type: 'password' as const, value: password, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value) },
            { name: 'Confirm Password', type: 'password' as const, value: confirmPassword, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value) },
        ],
        buttons: [
            { name: 'Sign Up', type: 'submit' as const, onClick: handleSignUp },
            { name: 'Continue with Google', type: 'button'as const, onClick: handleGoogle }
        ],
        additionalLinks: [
            { text: 'Already have an account?', linkText: 'Log In', href: '/login' },
        ],
        message
    };

    return (
        <div className="py-20 sm:py-40 flex items-center justify-center">
            <Form form={form} />
        </div>
    );
}