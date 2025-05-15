import Headline from "../ui/components/Headline"
import SubHeadLine from "../ui/components/SubHeadline"
import Paragraph from "../ui/components/Paragraph"
import Form from "../ui/components/Form"

export default function Page() {
    const fields = [
        {name: "Capsule Title", type: "text"},
        {name: "Message", type: "textarea"},
        {name: "Unlock Date", type: "date"},
        {name: "Upload a File", type: "file"},
        {name: "Make It Public", type: "Checkbox", values: ["yes", "no"]},      
    ]
    return(
        <>
         <Headline text="Create Your Time Capsule" />
         <SubHeadLine text="Write a message to your future self. We'll lock it away until the date you choose.
         " />
         <Paragraph text="What do you want to remember later?
         Write a message, record a memory, or store a secret. This capsule will stay sealed until the date you choose. When its time, you'll get a link to open it again — like opening a letter from the past." />
         <Form fields={fields} buttonText="Seal My Capsule" />
         <SubHeadLine text="Once sealed, your message will be safely locked away until your chosen date." />
         <Paragraph text="You’ll get a unique link to access your capsule later.
         We’ll never sell your data. Private capsules stay 100% private."/>
        </>
    )
}