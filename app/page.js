import { rubikMonoOne } from "./layout";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="px-5 py-8 max-w-[1140px] font-medium m-auto h-full text-center">
        <header className="flex justify-between items-center w-full">
          <p className="text-3xl tracking-tight">mavv.</p>
          <div className="flex items-center gap-6">
            <p className="text-sm">About</p>
            <div className="bg-gray-200 px-5 py-2 rounded-full">
              <p className="text-sm">Join Waitlist</p>
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-center">
          <div className="w-full h-full relative flex flex-col justify-center">
            <div className="py-20 text-6xl sm:text-7xl font-bold tracking-tight">
              <h1 className="text-gray-400">
                A <span className="text-gray-900">simpler</span> approach to
                <span className="text-gray-900"> banking.</span>
              </h1>
            </div>
            <h2 className="text-2xl font-normal pb-20 text-gray-400">
              We stripped away the clutter of modern banking apps, giving you a
              simple, focused view of your accounts, balances, and transactions.
            </h2>
            <div className="flex gap-4 m-auto">
              <div className="bg-gray-200 px-7 py-4 rounded-full w-fit mb-20">
                <p className="text-sm">About Us</p>
              </div>
              <div className="bg-[#0064FF] px-7 py-4 rounded-full w-fit text-white mb-20">
                <p className="text-sm">Join Waitlist</p>
              </div>
            </div>
            <Image
              src="/hero.png"
              alt="Hero image"
              width={1140}
              height={600}
              className="w-full h-auto rounded-lg object-contain box-border shadow-2xl mb-30"
              priority
            />

            <div className="flex items-center justify-center flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none text-4xl font-normal mb-6 text-center"
              />
              <div className="bg-[#0064FF] px-7 py-4 rounded-full w-fit text-white mb-30">
                <p className="text-sm">Join Waitlist</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="w-full border-t border-gray-200">
        <div className="px-5 py-8 max-w-[1140px] font-normal text-gray-400 m-auto h-full">
          © 2025 Mavv.
        </div>
      </div>
    </div>
  );
}
