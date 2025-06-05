'use client';

import { useEffect } from 'react';
import { Button as ButtonQuery } from '../lib/defintions';

import Headline from '../ui/components/headlines/Headline';
import Paragraph from '../ui/components/headlines/Paragraph';
import Button from '../ui/components/common/Button';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

const buttons: ButtonQuery[] = [
    { name: 'refresh', onClick: () => window.location.reload() },
];

  return (
                <div className="flex justify-center items-center h-screen fixed w-screen z-10">
                    <div className="w-[80vw] max-w-100 border border-node grid grid-rows-4">
                        <div className="bg-roseWater row-span-1 p-1.5">
                            <Headline text="error" />
                        </div>
                        <div className="bg-sageGreen row-span-3 text-white flex flex-col justify-between p-5 text-center">
                            <Paragraph text="Something Went Wrong" />
                            <Button button={buttons[0]} />
                        </div>
                    </div>
                </div>
  );
}