import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigate } from "@/components/navigate/Navigate";
import { SITE_NAME } from "@/constants/ceo.constants";
import { Providers } from "../app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: SITE_NAME,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                        {children}
                </Providers>
            </body>
        </html>
    );
}
