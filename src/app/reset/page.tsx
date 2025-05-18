'use client'

import { FormQuery } from "../lib/defintions"

import Form from "../ui/components/Form"

export default function Reset() {
    const handleClick = () => {

    }
    const form: FormQuery = {
        headline: 'Reset your password',
        subHeadline: "Enter your email address to receive password reset instructions.",
        fields: [
            { name: 'Email', type: 'email' }
        ],
        buttons: [
            { name: 'Send Reset Link', onClick: handleClick }
        ],
        additionalLinks: [
            { text: 'Remembered your password?', linkText: 'Log In', href: '/login' },
            { text: 'Don’t have an account?', linkText: 'Sign Up', href: '/register' }
        ]
    }

    return (
        <div className="py-20 sm:py-40 flex items-center justify-center">
            <Form form={form} />
        </div>
    )
}
