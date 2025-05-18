'use client'

import { useRouter } from "next/navigation"
import { Button as ButtonQuery } from "../lib/defintions"

import GreenHeadline from "../ui/components/GreenHeadline"
import Headline from "../ui/components/Headline"
import Capsules from "../ui/components/Capsules"
import Button from "../ui/components/Button"

export default function Page() {
    const router = useRouter()
        const handleClick = () => {
          router.push('/create')
        }
    const buttons: ButtonQuery[] = [
        {name: 'Create New Capsule', onClick: handleClick}
    ]
    return(
        <div className="pt-12 sm:px-5 flex items-center flex-col ">
            <div className="bg-sageGreen w-[90vw] flex items-center justify-center mt-5 sm:mt-10 p-5 border border-node">
         <Headline text="Welcome back! Here is a quick look at your time capsules." />

            </div>
        <GreenHeadline text="My Capsules" />
        <Capsules isPublic={false} />
        <Button button={buttons[0]} />
        <GreenHeadline text="Public Capsules" />
        <Capsules isPublic={true} />
        </div>
    )
}