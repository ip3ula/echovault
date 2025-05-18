"use client";

import { FormQuery } from "../../lib/defintions";

import Form from "../../ui/components/Form";

export default function ConfirmReset() {
    const handleClick = () => {
       
    }
    const form: FormQuery = {
        headline: 'Set a new password',
        subHeadline: "Enter and confirm your new password to complete the reset.",
        fields: [
            { name: 'New Password', type: 'password' },
            { name: 'Confirm Password', type: 'password' }
        ],
        buttons: [
            { name: 'Reset Password', onClick: handleClick }
        ],
        additionalLinks: [
            { text: 'Remembered your password?', linkText: 'Log In', href: '/login' },
            { text: 'Need a new reset link?', linkText: 'Request again', href: '/reset' }
        ]
    };

    return (
        <div className="py-20 sm:py-40 flex items-center justify-center">
            <Form form={form} />
        </div>
    );
}
