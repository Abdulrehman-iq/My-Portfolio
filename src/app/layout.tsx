import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/context/ThemeContext";
import localFont from "next/font/local";

// Define the Mori font using local font files
const mori = localFont({
  src: [
    {
      path: '../public/fonts/Mori-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Mori-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Mori-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Mori-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-mori',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Abdulrehman Iqbal | Full Stack Developer",
  description: "Professional portfolio of Abdulrehman Iqbal, a Full Stack Developer specializing in modern web applications",
  keywords: ["developer", "full stack", "web development", "portfolio", "react", "node.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${mori.variable} font-sans antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="animated-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}