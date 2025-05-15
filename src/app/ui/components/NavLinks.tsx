import Link from "next/link";

export default function NavLinks() {
    const links = [
        { name: 'home', href: '/' },
        { name: 'dashboard', href: '/dashboard' },
        { name: 'create', href: '/create' },
        { name: 'pricing', href: '/pricing' },
        { name: 'about', href: '/about' },
        { name: 'contact', href: '/contact' },
        { name: 'login', href: '/login' },
        { name: 'register', href: '/register' },
    ];

    return (
        <>
            {links.map(({ name, href }) => (
                <Link key={name} href={href}>
                    {name}
                </Link>
            ))}
        </>
    );
}
