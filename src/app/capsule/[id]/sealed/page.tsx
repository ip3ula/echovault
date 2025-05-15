import Headline from "../../../ui/components/Headline"
import Paragraph from "../../../ui/components/Paragraph" 

export default function Page() {
    return(
        <>
         <Headline text="Your Capsule Has Been Sealed" />
         <Paragraph text="We’ve locked your message safely until [Unlock Date].
         Keep this link to revisit your capsule when the time comes.
         " />
        </>
    )
}