import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

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
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <PageWrapper>{children}</PageWrapper>
            </body>
        </html>
    );
}
