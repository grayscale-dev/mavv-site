import { Rubik, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Header from "./components/header";
import Link from "next/link";
import TermsOfService from "./components/terms-of-service";
import PrivacyPolicy from "./components/privacy-policy";
import Footer from "./components/footer";

const rubik = Rubik({
  subsets: ["latin"],
});

export const rubikMonoOne = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "mavv",
  description: "A simpler approach to banking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased max-w-[1140px] m-auto p-3 overflow-x-hidden`}
      >
        <PrimeReactProvider>
          <Header />
          {children}
          <Footer />
        </PrimeReactProvider>
      </body>
    </html>
  );
}
