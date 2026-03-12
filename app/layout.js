import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Christian Hower | Civil Engineering Portfolio",
  description:
    "Portfolio of Christian Hower — Civil Engineering student at The Ohio State University with a minor in Architectural Studies. Showcasing projects in structural design, sustainable infrastructure, and architectural innovation.",
  keywords: [
    "Christian Hower",
    "Civil Engineering",
    "Ohio State University",
    "Architectural Studies",
    "Portfolio",
    "Structural Design",
  ],
  openGraph: {
    title: "Christian Hower | Civil Engineering Portfolio",
    description:
      "Civil Engineering student at The Ohio State University with a minor in Architectural Studies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
