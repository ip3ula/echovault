import { getCapsules } from "../lib/data"
import Capsules from "../ui/components/capsules/Capsules"
import { CapsuleQuery } from "../lib/defintions"

export default async function Page() {
        const capsules : CapsuleQuery[] = await getCapsules()
    return(
        <div className="pt-12 sm:px-5 flex items-center flex-col ">
        <Capsules capsules={capsules} />
        </div>
    )
}