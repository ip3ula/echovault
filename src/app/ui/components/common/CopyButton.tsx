'use client'

import { Button as ButtonQuery } from '../../../lib/defintions';
import { useState } from 'react' 
import Button from './Button';

export default function CopyButton() {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }

      const buttons: ButtonQuery[] = [
          {name: copied ? 'copied' : 'Copy Capsule ID', onClick: handleCopy},
        ]
    return(
        <Button button={buttons[0]} />
    )
}