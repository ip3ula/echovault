import Headline from "../ui/components/Headline"
import Capsules from "../ui/components/Capsules"
import Button from "../ui/components/Button"

export default function Page() {
    return(
        <>
         <Headline text="Welcome back! Here is a quick look at your time capsules." />
        <Headline text="My Capsules" />
        <Capsules />
        <Button text="Create New Capsule" />
        <Headline text="Public Capsules" />
        </>
    )
}