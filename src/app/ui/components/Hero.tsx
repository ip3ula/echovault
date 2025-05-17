'use client'
import Image from "next/image";
import { ButtonQuery } from '../../lib/defintions';

import Headline from './Headline'
import SubHeadline from './SubHeadline'
import Button from "./Button";

export default function Hero() {
    const handleClick = () => {

    }
    const buttons: ButtonQuery[] = [
        {name: 'Create Your Capsule', onClick: handleClick}
    ]
    return (
        <section className="bg-cover bg-center bg-sageGreen pt-20 p-15 h-150 flex flex-col gap-15 justify-center items-center">

         <h1 className="text-white text-center font-extrabold text-3xl py-5">Save a message for your future self</h1> 
      <SubHeadline text="Lock it away. Open it years later. A time capsule for your thoughts, memories, and dreams." />
      <Button button={buttons[0]} />
        </section>
    )
}