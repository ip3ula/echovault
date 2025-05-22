export function Skeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center p-5 lg:p-10 my-20">
            {[...Array(8)].map((_, index) => (
        <div key={index} className='border border-node grid grid-cols-5 w-[90vw] md:w-[45vw]'>
            <div className='bg-roseWater col-span-3 min-h-30 p-5'>
            <div className='h-5 bg-white rounded-full animate-pulse'></div>
            </div>
            <div className='bg-sageGreen col-span-2 min-h-30 max-h-auto p-5'>
            <div className='h-5 bg-mistyBlue rounded-full animate-pulse'></div>
            </div>
        </div>
            ))}
        </div>
    )
}