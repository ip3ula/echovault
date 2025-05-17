'use client';

import { ButtonQuery } from "../../lib/defintions";

export default function Button({ button }: {button: ButtonQuery} ) {
    return (
            <button onClick={button.onClick} className="bg-node text-white w-[90%] px-5 py-2 block mx-auto">{button.name}</button>
    );
}