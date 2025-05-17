import { ButtonQuery } from "../lib/defintions"

import Headline from "../ui/components/Headline"
import Capsules from "../ui/components/Capsules"
import Button from "../ui/components/Button"

export default function Page() {
    const buttons: ButtonQuery[] = [
        {name: 'Create New Capsule', onClick: ''}
    ]
    return(
        <div className="pt-20">
         <Headline text="Welcome back! Here is a quick look at your time capsules." />
        <Headline text="My Capsules" />
        <Capsules isPublic={false} />
        <Button button={buttons[0]} />
        <Headline text="Public Capsules" />
        <Capsules isPublic={true} />
        </div>
    )
}