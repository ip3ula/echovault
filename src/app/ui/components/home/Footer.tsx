import Link from "next/link"

export default function Footer() {
  const links = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <section>
      <h1>© {new Date().getFullYear()} EchoVault. All rights reserved.</h1>
      {links.map(({ name, href }, i) => (
        <Link key={i} href={href}>
          {name}
        </Link>
      ))}
    </section>
  );
}
