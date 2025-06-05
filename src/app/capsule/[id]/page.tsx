// app/capsule/[id]/page.tsx
import { getCapsule } from '../../lib/data';
import { notFound } from 'next/navigation';
import DetailedCapsule from '../../ui/components/capsules/DetailedCapsule';

export default async function Page({ params }: { params: { id: string } }) {
  const capsuleArray = await getCapsule(params.id);
  const rawCapsule = Array.isArray(capsuleArray) ? capsuleArray[0] : capsuleArray;

  if (!rawCapsule) {
    notFound();
  }

  const capsule = {
    id: rawCapsule.id,
    title: rawCapsule.title,
    ...rawCapsule,
  };

  return <DetailedCapsule capsule={capsule} />;
}
