'use client'

import { Button as ButtonQuery } from "../../../lib/defintions";

export default function Button({ button }: {button: ButtonQuery} ) {
    console.log(button.onClick);
    return (
            <button
                onClick={typeof button.onClick === "function" ? button.onClick as React.MouseEventHandler<HTMLButtonElement> : undefined}
                type={button.type}
                className="bg-node text-white w-[90%] px-5 py-3 block mx-auto lg:py-4 hover:cursor-pointer"
            >
                {button.name}
            </button>
    );
}