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
    "Portfolio of Christian Hower — B.S. Civil Engineering student at The Ohio State University with a minor in Architectural Studies. Seeking internship opportunities in transportation and structural engineering. GPA 3.49.",
  keywords: [
    "Christian Hower",
    "Civil Engineering",
    "Ohio State University",
    "Architectural Studies",
    "Structural Engineering",
    "Transportation Engineering",
    "AutoCAD",
    "MATLAB",
    "SketchUp",
  ],
  openGraph: {
    title: "Christian Hower | Civil Engineering Portfolio",
    description:
      "B.S. Civil Engineering student at The Ohio State University with a minor in Architectural Studies. 1st Place MakeOHI/O 2026.",
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
