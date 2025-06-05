'use client';
import { CapsuleQuery } from '../../../lib/defintions';
import Paragraph from '../headlines/Paragraph';
import Headline from '../headlines/Headline';
import SubHeadLine from '../headlines/SubHeadline';
import CopyButton from '../common/CopyButton';

export default function DetailedCapsule({ capsule }: { capsule:  CapsuleQuery}) {

  const date = new Date(capsule.unlockDate ?? '');
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
        <div className="bg-sageGreen p-10 lg:p-15 text-white lg:col-span-2 flex flex-col justify-between">
          <Paragraph text={capsule.sealed ? "You can't view its contents until that date." : (capsule.message ?? '')} />
          <div className="py-10 flex flex-col gap-3">
            <CopyButton />
          </div>
        </div>
      </div>
    </div>
  );
}
