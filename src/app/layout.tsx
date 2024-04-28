import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Skripta",
    description: "",
};

const PageWrapper = dynamic(() => import("./pageWrapper"), {
    ssr: false,
});

export default function RootLayout({
    children,
    params: { session, ...params },
}: Readonly<{
    children: React.ReactNode;
    params: { session: Session };
}>) {
    return (
        <html suppressHydrationWarning={true} lang="en">
            <body className={inter.className}>
                <PageWrapper session={session}>{children}</PageWrapper>
            </body>
        </html>
    );
}
