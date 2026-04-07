import { Inter } from "next/font/google"; 
import localFont from "next/font/local"; 
import "./globals.css";
import HydrationFix from "./components/HydrationFix";


// Font configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Muhammad Faizan",
  description: "FrontEnd Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HydrationFix />
        {children}
      </body>
    </html>
  );
}
