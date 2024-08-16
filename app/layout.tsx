import type { Metadata } from "next";
import { Inter,Lusitana,Nunito } from "next/font/google";
import "./globals.css";
import { link } from "fs";

const inter = Inter({ subsets: ["latin"] });
const lusitana = Nunito({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Streaver-test",
  description: "Agustin Manganelli",
  icons:{icon: "/icono.jpg"}
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lusitana.className}>{children}</body>
    </html>
  );
}
