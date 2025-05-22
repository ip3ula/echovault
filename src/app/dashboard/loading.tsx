import { Skeleton } from "../ui/components/Skeletons";

// export default function Loading() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-sageGreen"></div>
//       <p className="text-2xl text-sageGreen mt-4">Loading...</p>
//     </div>
//   );
// }

export default function Loading() {
  return <Skeleton />
}