import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/trustroots-logo.svg";
import "./globals.css";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Trustrots (sic): What Went Wrong With Trustroots.org",
  description: "What went wrong with Trustroots.org",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <Link href="/" className={styles.logoContainer}>
            <Image src={logo} alt="" width={50} className={styles.logo} />
            <span className={styles.emoji}>😭</span>
          </Link>
        </header>
        <section className={styles.content}>{children}</section>
        <footer className={styles.footer}>
          <a href="https://github.com/trustroots-community/trustrots">source</a>
          <Link href="/about">about</Link>
        </footer>
      </body>
    </html>
  );
}
