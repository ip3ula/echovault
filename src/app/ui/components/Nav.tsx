'use client'

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";


import Headline from "./Headline";
import Menu from "./Menu";

export default function Nav() {
    const [menu, setMenu] = useState(false)
    return(
        <div className="flex justify-center">
        <div className="bg-roseWater opacity-90 h-10 lg:h-12 w-[90vw] m-5 fixed flex justify-between items-center p-3 text-white border border-node">
            <Bars3Icon onClick={() => setMenu(!menu)} className="size-9 lg:size-10" />
            <Headline text="EchoVault" />
        </div>
            {menu && <Menu />}
        </div>
    )
}