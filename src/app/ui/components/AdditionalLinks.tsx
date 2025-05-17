import { AdditionalLinkesQuery } from "../../lib/defintions";

import SubHeadLine from "./SubHeadline";

export default function AdditionalLinks({links} : {links: AdditionalLinkesQuery[]}) {
    return (
        <section>
            {
                links.map(link => (

                ))
            }
        </section>
    )
}