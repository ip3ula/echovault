import Form from "../ui/components/Form";
import Headline from "../ui/components/Headline";
import SubHeadLine from "../ui/components/SubHeadline";

export default function Page() {
    const fields = [
        {name: 'Name', type: 'text'},
        {name: 'Email', type: 'Email'},
        {name: 'Message', type: 'textarea'},
    ]
    return(
        <>
         <Headline text="Get in Touch"/>
         <SubHeadLine text="Questions, feedback, or collaboration? We'd love to hear from you."/>
         <Form fields={fields} buttonText="Send Message" />
        </>
    )
}