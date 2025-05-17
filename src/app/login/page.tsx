import Form from "../ui/components/Form"

export default function Page() {
    const form = {
        headline: 'Welcome back!',
        subHeadline: "Access your saved time capsules and continue writing to the future.",
        fields: [
        {name: 'Email', type: 'email'},
        {name: 'Password', type: 'password'},
    ],
    buttons: [
    {name: 'Log In', onClick: ''},
    {name: 'Continue with Google', onClick: ''}
    ],
    additionalLinks: [
                {text: 'Don’t have an account?', linkText: 'Sign Up', href: '/register'},
                {text: 'Forgot your password?', linkText: 'Reset It', href: '/reset'},
    ]
    }
    return(
        <div className="py-20 sm:py-40 flex items-center justify-center">
            <Form form={form} />
        </div>
    )
}