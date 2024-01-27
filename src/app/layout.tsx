import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/trustroots-logo.svg";
import "./globals.css";
import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trustrots: What Went Wrong With Trustroots.org",
  description: "What went wrong with Trustroots.org",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href="/" className={styles.logoContainer}>
          <Image src={logo} alt="" width={50} className={styles.logo} />
          <span className={styles.emoji}>😭</span>
        </Link>
        {children}
      </body>
    </html>
  );
}
