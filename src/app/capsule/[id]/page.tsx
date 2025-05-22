// app/capsule/[id]/page.tsx
import { getCapsule } from '../../lib/data';
import { notFound } from 'next/navigation';
import DetailedCapsule from '../../ui/components/DetailedCapsule';

export default async function Page({ params }: { params: { id: string } }) {
  const capsuleArray = await getCapsule(params.id);
  const capsule = Array.isArray(capsuleArray) ? capsuleArray[0] : capsuleArray;

  if (!capsule) {
    notFound();
  }

  return <DetailedCapsule capsule={capsule} />;
}
