import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CampusProvider } from "@/context/CampusContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CampusHub",
  description: "One place for college announcements, events and lost & found.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CampusProvider>
          <Navbar />
          <main className="container main">{children}</main>
          <Footer />
        </CampusProvider>
      </body>
    </html>
  );
}
