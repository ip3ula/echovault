import { CardQuery, Button as ButtonQuery } from "../../lib/defintions";

import Button from "./Button";
import Headline from "./Headline";
import List from "./List";
import Paragraph from "./Paragraph";
import SubHeadLine from "./SubHeadline";

export default function Card({item}: {item: CardQuery}) {
    const buttons: ButtonQuery[] = [
        {name: item.buttonText,onClick: item.buttonFunction}
    ]
    return(
        <div className="w-80 text-white border border-node">
            <div className="bg-roseWater p-5">
            <Headline text={item.title} />
            <Paragraph text={item.description} />
            <SubHeadLine text={item.subTitle} />
            </div>
            <div className="bg-sageGreen p-5">
            <List list={item.list} />
            <div className="mt-10 mb-5 flex justify-center">
            <Button button={buttons[0]} />
            </div>
            </div>
        </div>
    )
}