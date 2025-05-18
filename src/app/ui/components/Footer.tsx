import { LinkQuery } from "../../lib/defintions";

import Link from "next/link"
import SubHeadLine from "./SubHeadline";

export default function Footer() {
  const links: LinkQuery[] = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <section className="bg-sageGreen p-5">
      <h1 className="text-white text-center font-extrabold text-2xl py-5">{`© ${new Date().getFullYear()} EchoVault. All rights reserved.`}</h1>
      {links.map(({ name, href }, i) => (
        <Link key={i} href={href}>
          <SubHeadLine text={name} />
        </Link>
      ))}
    </section>
  );
}
