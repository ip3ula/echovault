'use client'

import { useRouter } from 'next/navigation';
import { Button as ButtonQuery } from '../../lib/defintions';

import Headline from './headlines/Headline'
import SubHeadline from './headlines/SubHeadline'
import Button from "./common/Button";

export default function Hero({headline, subHeadline}) {
    const router = useRouter()
    const handleClick = () => {
      router.push('/create')
    }
    const buttons: ButtonQuery[] = [
        {name: 'Create Your Capsule', onClick: handleClick}
    ]
    return (
        <section className="bg-cover bg-center bg-sageGreen pt-20 p-15 md:p-50 h-120 grid grid-cols-1 lg:grid-cols-3 gap-15 justify-center items-center">

         <Headline text={headline}/> 
         <div className="lg:col-span-2 flex flex-col gap-10">
      <SubHeadline text={subHeadline} />
      <Button button={buttons[0]} />
      </div>
        </section>
    )
}