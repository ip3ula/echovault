import type { Metadata } from "next";
import { Geist, Geist_Mono, Share_Tech } from "next/font/google";
import "./ui/styles/globals.css";
import Nav from "./ui/components/outline/Nav";
import { Providers } from "./Providers";
import { getServerSession } from "next-auth/next";
import { authConfig } from "../../auth.config";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const shareTech = Share_Tech({
	variable: "--font-share-tech",
	subsets: ["latin"],
	weight: "400"
});

export const metadata: Metadata = {
	title: "EchoVault",
	description: "time capsule website",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getServerSession(authConfig);
	console.log("Session in RootLayout:", session);

	return (
		<html lang="en">
			<body
				style={{ background: "#E3E8E9" }}
				className={`${geistSans.variable} ${geistMono.variable} ${shareTech.variable} antialiased`}
			>
				<Providers session={session}>
					<Nav />
					{children}
				</Providers>
			</body>
		</html>
	);
}