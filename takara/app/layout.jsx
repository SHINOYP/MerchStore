import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "../styles/global.scss";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Takara",
  description: "Anime Merchandaise E-commerce Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
