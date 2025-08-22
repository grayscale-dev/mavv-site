import { Rubik, Rubik_Mono_One } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <div>
          <div className="px-5 py-8 max-w-[1140px] font-medium m-auto h-full text-center overflow-hidden">
            <header className="flex justify-between items-center w-full">
              <Link href="/">
                <p className="text-2xl tracking-tight">mavv.</p>
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/about">
                  <p className="text-sm">About</p>
                </Link>
                <Link
                  href="https://cdn.forms-content-1.sg-form.com/416bb6c7-7ee6-11f0-9db3-c21596751a73"
                  target="_blank"
                >
                  <button className="bg-neutral-200 px-5 py-2 rounded-full text-sm hover:bg-neutral-100 cursor-pointer dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    Request Access
                  </button>
                </Link>
              </div>
            </header>

            <main className="flex-1 flex items-center">{children}</main>
          </div>

          <div className="w-full border-t border-neutral-200 dark:border-neutral-900">
            <div className="px-5 py-8 max-w-[1140px] font-normal text-neutral-400 dark:text-neutral-600 m-auto h-full text-sm">
              © 2025 Mavv
              <div className="block">
                <Link href="/terms-of-service">Terms of Service · </Link>
                <Link href="/privacy-policy">Privacy policy</Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
