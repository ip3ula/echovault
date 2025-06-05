import Capsule from "./Capsule"

export default async function Capsules({capsules}) {
    
    if (!capsules || capsules.length === 0) {
        return (
            <section className="flex items-center justify-center p-5 lg:p-10 py-15">
                <p className="text-gray-500">No capsules found.</p>
            </section>
        )
    }
       
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center p-5 lg:p-10 py-15">
            {capsules?.map(capsule => (
                <Capsule capsule={capsule} key={capsule.id} />
            )
            )}
        </section>
    )
}