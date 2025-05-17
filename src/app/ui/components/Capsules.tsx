import { capsules } from "../../lib/capsules"
import Capsule from "./Capsule"

export default function Capsules({isPublic}: {isPublic: boolean}) {
    const filtered = isPublic 
    ? capsules.filter(capsule => capsule.isPublic === isPublic) 
    : capsules
    return (
        <section className="flex flex-col gap-5 justify-center items-center p-5 py-15">
            {filtered.map(capsule => (
                <Capsule capsule={capsule} key={capsule.id} />
            )
            )}
        </section>
    )
}