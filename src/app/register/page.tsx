import { FieldQuery, ButtonQuery, AdditionalLinkesQuery } from "../lib/defintions"

import Headline from "../ui/components/Headline"
import SubHeadLine from "../ui/components/SubHeadline"
import Form from "../ui/components/Form"
import AdditionalLinks from "../ui/components/AdditionalLinks"

export default function Page() {
    const form = {
        headline: 'Create Your Time Capsule Account',
        subHeadline: "Start saving messages, memories, and moments for the future.It only takes a minute to begin your journey.",
        fields: [
        {name: 'Name', type: 'text'},
        {name: 'Email', type: 'email'},
        {name: 'Password', type: 'password'},
        {name: 'Confirm Password', type: 'password'},
    ],
    buttons: [
        {name: 'Sign Up', onClick: ''},
        {name: 'Continue with Google', onClick: ''}
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