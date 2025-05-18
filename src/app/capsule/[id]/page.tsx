'use client'
import { useParams } from 'next/navigation';
import { useState } from 'react' 
import { capsules } from '../../lib/capsules'

import Paragraph from '../../ui/components/Paragraph'
import Headline from '../../ui/components/Headline'
import SubHeadLine from '../../ui/components/SubHeadline'
import Button from '../../ui/components/Button'
import { ButtonQuery } from '../../lib/defintions';

export default function Page() {
  const {id} = useParams()
  const [copied, setCopied] = useState(false)

  const handleEdit = () => {

  }
  const handleDelete = () => {

  }
  const capsule = capsules.find(capsule => capsule.id === id)

  if (!capsule) {
    return <p>Capsule not found.</p>
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const buttons: ButtonQuery[] = [
    {name: copied ? 'copied' : 'Copy Capsule ID', onClick: handleCopy},
    {name: "edit", onClick: handleEdit},
    {name: "delete", onClick: handleDelete}
  ]

  return (
    <div className="p-5 flex justify-center h-screen items-center">
        <div className='border border-node lg:grid lg:grid-cols-3 max-w-200'>
          <div className="bg-roseWater p-5 lg:p-10 lg:col-span-1 text-center">
          <Headline  text={capsule.sealed ?'Capsule Still Sealed' : 'Capsule Unsealed'} />
          <SubHeadLine text={capsule.sealed ? `This capsule is sealed and will unlock on: ${capsule.unlockDate}` : `Originally sealed until: ${capsule.unlockDate}`} />
          </div>
          <div className='bg-sageGreen p-5 lg:p-10 text-white lg:col-span-2 '>
          <Paragraph text={capsule.sealed ? "You can't view its contents until that date.": capsule.message} />
          <div className='py-10 flex flex-col gap-3'>
            {buttons.map(button => (
              <Button key={button.name} button={button} />
            ))}
          </div>
          </div>
        </div>
    </div>
  )
}
