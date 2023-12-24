"use client"
import "@/styles/globals.css";
import { Providers } from "./providers";
import clsx from "clsx";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<title>ComboRush</title>
			</head>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
				)}
			>

				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
