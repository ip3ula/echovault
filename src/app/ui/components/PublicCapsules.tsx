import Capsules from "./Capsules";

import Headline from "./Headline";

export default function PublicCapsules() {
    return(
        <section>
         <Headline text="Take a peek at messages others have sealed for the future..." />
         <Capsules isPublic={true} />
        </section>
    )
}