import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Ferreira - Portifólio",
  description: "Esse é o meu portifólio com alguns projetos que eu fiz",
  openGraph: {
    images: "https://cdn.discordapp.com/attachments/1091340777197670460/1228427218825248830/android-chrome-192x192.png?ex=662c0100&is=66198c00&hm=d259196f581a6f3535b5f7a9bbf710a583c4c790479a9a483d6be54528246a00&",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
