import {Kanit} from "next/font/google";
import "./globals.css";
import NavBar from "./Shared/NavBar";


const fontName = Kanit({subsets:['latin'],weight:'400'});

export const metadata = {
  title: "Items Collection",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontName.className} antialiased`}
      >
       <NavBar/> {children}
      </body>
    </html>
  );
}
