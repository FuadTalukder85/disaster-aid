import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Disaster aid",
  description:
    "https://fuad-talukder.vercel.app/,https://github.com/FuadTalukder85,https://www.facebook.com/fuad.hasan.tk/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
