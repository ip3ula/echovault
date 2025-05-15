import { capsules } from "../../lib/capsules"
import Capsule from "./Capsule"

export default function Capsules({isPublic}) {
    const filtered = capsules.filter(capsule => capsule === isPublic) || capsules
    return (
        <section>
            {filtered.map(capsule => (
                <Capsule title={capsule.title} date={capsule.unlockDate} key={capsule.id} />
            )
            )}
        </section>
    )
}