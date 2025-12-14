import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import AppLayout from "./components/layout/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// ➤ Add Poppins Font Here
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "LifeLog",
  description: "Personal growth and productivity tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${poppins.variable}
          antialiased
        `}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
