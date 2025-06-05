'use client'
import { LinkQuery } from "../../../lib/defintions";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import UserData from "../common/UserData";

export default function Menu({ setMenu }) {
    const { data: session } = useSession();
    console.log('session',session)
    const user = session?.user;
    console.log('user', user)
    const pathname = usePathname();
    const links: LinkQuery[] = [
        { name: 'home', href: '/' },
        { name: 'your capsules', href: '/dashboard' },
        { name: 'create', href: '/create' },
        { name: 'login', href: '/login' },
        { name: 'register', href: '/register' },
        { name: 'logout', href: '/api/auth/signout' }
    ];

    return (
        <div className="fixed bg-roseWater w-[50vw] max-w-70 flex flex-col top-17 left-[6vw] border border-node gap-3 p-4 lg:top-20 z-20 pb-10 pt-7">
        {user && (
            <UserData user={user} />
        )}
            {links.map(({ name, href }) => {
                if (name === 'logout' && !user) {
                    return null;
                }
                if ((name === 'login' || name === 'register') && user) {
                    return null;
                }
                return (
                    <Link key={name} href={href} onClick={() => setMenu(false)}>
                        <h1 className={clsx(
                            'text-white text-center font-extrabold text-2xl',
                            { 'underline': pathname === href,
                                'text-mistyBlue': name === 'logout'
                             }
                        )}>{name}</h1>
                    </Link>
                );
            })}
        </div>
    );
}