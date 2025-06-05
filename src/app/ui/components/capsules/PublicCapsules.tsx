import Capsules from "./Capsules";
import { getPublicCapsules } from "../../../lib/data";
export default async function PublicCapsules() {
    const capsules = await getPublicCapsules();
    return(
        <section>
        <h1 className="text-sageGreen text-center font-extrabold text-3xl py-5">Take a peek at messages others have sealed for the future...</h1>
         <Capsules capsules={capsules} />
        </section>
    )
}