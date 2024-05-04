import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import AuthContext from "@/context/auth-context";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Orosia Messenget",
  description: "Fullstack sample work by Adel Namazi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
       <AuthContext>
       <Navbar />
        <Sidebar />
        {children}
       </AuthContext>
      </body>
    </html>
  );
}
