import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Jones.com",
  description: "Find premium domain names for your business",
};

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
  variable: "--font-jost", // Create a CSS variable for the font
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.variable}>
      <body className={jost.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
