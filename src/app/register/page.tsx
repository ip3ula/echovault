'use client'

import { FormQuery } from "../lib/defintions"

import Headline from "../ui/components/Headline"
import SubHeadLine from "../ui/components/SubHeadline"
import Form from "../ui/components/Form"

export default function Page() {
    const handleSingUp = () => {

    }
    const handleGoogle = () => {

    }
    const form: FormQuery = {
        headline: 'Create Your Time Capsule Account',
        subHeadline: "Start saving messages, memories, and moments for the future.It only takes a minute to begin your journey.",
        fields: [
        {name: 'Name', type: 'text'},
        {name: 'Email', type: 'email'},
        {name: 'Password', type: 'password'},
        {name: 'Confirm Password', type: 'password'},
    ],
    buttons: [
        {name: 'Sign Up', onClick: handleSingUp},
        {name: 'Continue with Google', onClick: handleGoogle}
    ],
    additionalLinks:  [
        {text: 'Already have an account?', linkText: 'Log In', href: '/login'},
    ]
    }
    return(
        <div className="py-20 sm:py-40 flex items-center justify-center">
         <Headline text="" />
         <SubHeadLine text="" />
         <Form form={form} />
        </div>
    )
}