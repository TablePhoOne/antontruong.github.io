import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Anton Truong",
  description: "Chef & Supper Club",
  icons: {
  icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}