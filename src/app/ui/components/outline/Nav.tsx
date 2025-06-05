// components/Nav.jsx (server component — no 'use client')
import Headline from "../headlines/Headline";
import NavBar from "./NavBar";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-center z-20">
      <div className="bg-roseWater opacity-95 h-10 lg:h-12 w-[90vw] m-5 fixed flex justify-between items-center p-3 text-white border border-node">
        <div className="flex items-center gap-2 sm:gap-4">
          <NavBar />
        </div>
        <Link href="/">
          <Headline text="EchoVault" />
        </Link>
      </div>
    </div>
  );
}
