'use client'

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";


import Menu from "./Menu";

export default function NavBar() {
    const [menu, setMenu] = useState(false)
    return(
        <div className="flex justify-center z-20">
            <Bars3Icon onClick={() => setMenu(!menu)} className="size-9 lg:size-10" />
            {menu && <Menu setMenu={setMenu} />}
        </div>
    )
}