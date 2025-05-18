'use client'

import { useRouter } from 'next/navigation';
import { Button as ButtonQuery } from '../../lib/defintions';

import Headline from './Headline'
import SubHeadline from './SubHeadline'
import Button from "./Button";

export default function Hero() {
    const router = useRouter()
    const handleClick = () => {
      router.push('/create')
    }
    const buttons: ButtonQuery[] = [
        {name: 'Create Your Capsule', onClick: handleClick}
    ]
    return (
        <section className="bg-cover bg-center bg-sageGreen pt-20 p-15 md:p-50 h-150 grid grid-cols-1 lg:grid-cols-3 gap-15 justify-center items-center">

         <Headline text="Save a message for your future self"/> 
         <div className="lg:col-span-2 flex flex-col gap-15">
      <SubHeadline text="Lock it away. Open it years later. A time capsule for your thoughts, memories, and dreams." />
      <Button button={buttons[0]} />
      </div>
        </section>
    )
}