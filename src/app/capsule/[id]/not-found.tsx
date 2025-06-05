'use client';

import { useRouter } from 'next/navigation';
import Headline from "../../ui/components/headlines/Headline";
import Paragraph from "../../ui/components/headlines/Paragraph";
import Button from "../../ui/components/common/Button";
import { Button as ButtonQuery } from "../../lib/defintions";

export default function NotFound() {
  const router = useRouter();

  const buttons: ButtonQuery[] = [
    {
      name: 'Go to Dashboard',
      onClick: () => router.push('/dashboard'),
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen fixed w-screen z-10">
      <div className="w-[80vw] max-w-100 border border-node grid grid-rows-4">
        <div className="bg-roseWater row-span-1 p-1.5">
          <Headline text="Not Found" />
        </div>
        <div className="bg-sageGreen row-span-3 text-white flex flex-col justify-between p-5 text-center">
          <Paragraph text="Could not find requested capsule" />
          <Button button={buttons[0]} />
        </div>
      </div>
    </div>
  );
}
