import { CardQuery } from "../../lib/defintions";

import Card from "./Card";

export default function Cards({object}: {object: CardQuery[]}) {
    return(
        <div className="flex flex-wrap items-center justify-center gap-5 py-15 px-5">
        {
            object.map(item => (
                <div key={item.title}>
                    <Card item={item} />
                </div>
            ))
        }
        </div>
    )
}