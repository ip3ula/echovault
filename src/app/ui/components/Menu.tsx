import { LinkQuery } from "../../lib/defintions";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function Menu({setMenu}) {
    const pathname = usePathname()
    const links: LinkQuery[] = [
        { name: 'home', href: '/' },
        { name: 'dashboard', href: '/dashboard' },
        { name: 'create', href: '/create' },
        { name: 'pricing', href: '/pricing' },
        { name: 'about', href: '/about' },
        { name: 'contact', href: '/contact' },
        { name: 'login', href: '/login' },
        { name: 'register', href: '/register' },
    ];
    console.log(pathname)

    return (
        <div className="fixed bg-roseWater w-[50vw] max-w-70 opacity-90 flex flex-col top-17 left-[6vw] border border-node gap-3 p-5 lg:top-20 z-20">
            {links.map(({ name, href }) => (
                <Link key={name} href={href} onClick={() => setMenu(false)}>
                   <h1 className={clsx(
                    'text-white text-center font-extrabold text-2xl',
                    {
                        'underline': pathname === href
                    }
                   )}>{name}</h1>
                </Link>
            ))}
        </div>
    );
}
