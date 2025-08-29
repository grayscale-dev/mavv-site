import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";
import About from "./components/about";
import JoinWaitlist from "./components/join-waitlist";

export default function Home() {
  return (
    <div className="w-full h-full relative flex flex-col justify-center text-center overflow-hidden">
      <div className="py-20 text-6xl sm:text-7xl font-bold tracking-tight">
        <h1 className="text-neutral-400">
          A <span className="text-neutral-900">simpler</span> approach to
          <span className="text-neutral-900"> banking.</span>
        </h1>
      </div>
      <h2 className="text-2xl font-normal pb-20 text-neutral-400">
        We stripped away the clutter of modern banking apps, giving you a
        simple, focused view of your accounts, balances, and transactions.
      </h2>
      <div className="flex gap-4 m-auto mb-20">
        <About />
        <JoinWaitlist />
      </div>

      <div className="relative">
        <div className="hidden sm:block">
          <Image
            src="/hero-light.png"
            alt="Hero image"
            width={1140}
            height={600}
            className="h-auto rounded-lg object-contain box-border shadow-xl mb-30 block"
            priority
          />
        </div>

        <div className="relative w-[150vw] h-[65vh] overflow-visible ml-25 block sm:hidden z-0">
          <Image
            src="/hero-light.png"
            alt="Hero image"
            fill
            className="rounded-lg shadow-2xl mb-30 block  object-cover object-left"
            priority
          />
        </div>

        <div className="block sm:hidden">
          <Image
            src="/phone-light.png"
            alt="Hero image"
            width={1140}
            height={600}
            className="w-[55%] h-auto rounded-lg object-contain box-border -mt-110 z-100 mr-20 block "
            priority
          />
        </div>

        <div className="hidden sm:block">
          <Image
            src="/phone-light.png"
            alt="Hero image"
            width={1140}
            height={600}
            className="w-[30%] h-auto rounded-lg object-contain box-border -mt-170 mr-20 ml-auto block "
            priority
          />
        </div>
      </div>
    </div>
  );
}
