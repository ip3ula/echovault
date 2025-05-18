'use client'

import { useRouter } from "next/navigation"
import { Button as ButtonQuery } from "../lib/defintions"

import GreenHeadline from "../ui/components/GreenHeadline"
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
        <div className="pt-30 sm:p-5">
         <GreenHeadline text="Welcome back! Here is a quick look at your time capsules." />
        <GreenHeadline text="My Capsules" />
        <Capsules isPublic={false} />
        <Button button={buttons[0]} />
        <GreenHeadline text="Public Capsules" />
        <Capsules isPublic={true} />
        </div>
    )
}