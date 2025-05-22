// app/capsule/[id]/DetailedCapsule.tsx
'use client';

import Paragraph from '../../ui/components/Paragraph';
import Headline from '../../ui/components/Headline';
import SubHeadLine from '../../ui/components/SubHeadline';
import Button from '../../ui/components/Button';
import { Button as ButtonQuery } from '../../lib/defintions';
import CopyButton from './CopyButton';

export default function DetailedCapsule({ capsule }: { capsule: any }) {
  const handleEdit = () => {
    console.log('Edit button clicked');
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
  };

  const buttons: ButtonQuery[] = [
    { name: 'edit', onClick: 'handleEdit' },
    { name: 'delete', onClick: 'handleDelete' }
  ];

  const date = new Date(capsule.unlockDate);
  const formatted = date.toLocaleDateString();

  return (
    <div className="p-5 flex justify-center h-screen items-center">
      <div className="border border-node lg:grid lg:grid-cols-3 max-w-200">
        <div className="bg-roseWater p-5 lg:p-10 lg:col-span-1 text-center">
          <Headline text={capsule.sealed ? 'Capsule Still Sealed' : 'Capsule Unsealed'} />
          <SubHeadLine
            text={
              capsule.sealed
                ? `This capsule is sealed and will unlock on: ${formatted}`
                : `Originally sealed until: ${formatted}`
            }
          />
        </div>
        <div className="bg-sageGreen p-5 lg:p-10 text-white lg:col-span-2">
          <Paragraph text={capsule.sealed ? "You can't view its contents until that date." : capsule.message} />
          <div className="py-10 flex flex-col gap-3">
            <CopyButton />
            {buttons.map((button) => (
              <Button key={button.name} button={button} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
