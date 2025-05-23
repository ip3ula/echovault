'use client'

import { FormQuery } from "../lib/defintions";

import Form from "../ui/components/Form";

export default function Page() {
    const handleClick = () => {

    }
    const form: FormQuery = {
        headline: 'Get in Touch',
        subHeadline: "Questions, feedback, or collaboration? We'd love to hear from you.",
        fields: [
        {name: 'Name', type: 'text'},
        {name: 'Email', type: 'email'},
        {name: 'Message', type: 'textarea'},
    ],
    buttons:[
        {name: 'Send a Message', onClick: handleClick}
    ]
    }
    return(
        <div className="py-20 sm:py-40 flex flex-col items-center justify-center">
            <Form form={form} />
        </div>
    )
}