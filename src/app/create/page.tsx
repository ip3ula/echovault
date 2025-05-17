import Form from "../ui/components/Form"

export default function Page() {
    const form = {
        headline: 'Create Your Time Capsule',
        subHeadline: "Write a message to your future self. We'll lock it away until the date you choose.",
        fields: [
        {name: "Capsule Title", type: "text"},
        {name: "Message", type: "textarea"},
        {name: "Unlock Date", type: "date"},
        {name: "Upload a File", type: "file"},
        {name: "Make It Public", type: "radio", values: ["yes", "no"]},      
    ],
    buttons: [
        {name: 'Seal My Capsule', onClick: ''}
    ]
    }
    return(
        <div className="py-20 sm:py-40 flex flex-col items-center justify-center">
         <Form form={form} />
        </div>
    )
}