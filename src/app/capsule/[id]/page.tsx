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
    {name: copied ? 'copied' : 'Copy Capsule ID', onClick: handleCopy}
  ]

  return (
    <div className="p-4">
      {capsule.sealed ? (
        <>
          <Headline text="Capsule Still Sealed" />
          <SubHeadLine text={`This capsule is sealed and will unlock on: ${capsule.unlockDate}`} />
          <Paragraph text="You can't view its contents until that date." />
        </>
      ) : (
        <>
          <Headline text="Capsule Unsealed" />
          <SubHeadLine text={`Originally sealed until: ${capsule.unlockDate}`} />
          <Paragraph text={capsule.message} />
          <Button button={buttons[0]} />
        </>
      )}
    </div>
  )
}
