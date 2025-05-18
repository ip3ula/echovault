import Capsules from "./Capsules";

export default function PublicCapsules() {
    return(
        <section>
        <h1 className="text-sageGreen text-center font-extrabold text-3xl py-5">Take a peek at messages others have sealed for the future...</h1>
         <Capsules isPublic={true} />
        </section>
    )
}