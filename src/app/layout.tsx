import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Session } from "next-auth";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Skripta",
    description: "Skripta is a script writing tool",
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
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body suppressHydrationWarning={true} className={inter.className}>
                <PageWrapper session={session}>{children}</PageWrapper>
            </body>
        </html>
    );
}
