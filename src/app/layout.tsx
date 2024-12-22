import type { Metadata } from "next";
import './App.scss'
import Header from "@/widgets/header/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
