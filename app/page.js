import { rubikMonoOne } from "./layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full relative flex flex-col justify-center">
      <div className="py-20 text-6xl sm:text-7xl font-bold tracking-tight">
        <h1 className="text-neutral-400 dark:text-neutral-700">
          A{" "}
          <span className="text-neutral-900 dark:text-neutral-400">
            simpler
          </span>{" "}
          approach to
          <span className="text-neutral-900 dark:text-neutral-400">
            {" "}
            banking.
          </span>
        </h1>
      </div>
      <h2 className="text-2xl font-normal pb-20 text-neutral-400 dark:text-neutral-500">
        We stripped away the clutter of modern banking apps, giving you a
        simple, focused view of your accounts, balances, and transactions.
      </h2>
      <div className="flex gap-4 m-auto">
        <Link href="/about">
          <button className="bg-neutral-200 px-7 py-4 mb-20 rounded-full text-sm hover:bg-neutral-100 cursor-pointer dark:bg-neutral-900 dark:hover:bg-neutral-800">
            About
          </button>
        </Link>
        <button className="bg-blue-600 px-7 py-4 rounded-full w-fit text-white mb-20 hover:bg-blue-500 text-sm cursor-pointer dark:bg-blue-800 dark:hover:bg-blue-700">
          Request Access
        </button>
      </div>

      <div className="relative dark:hidden">
        <div className="hidden sm:block">
          <Image
            src="/hero-light.png"
            alt="Hero image"
            width={1140}
            height={600}
            className="h-auto rounded-lg object-contain box-border shadow-xl mb-30 block dark:hidden"
            priority
          />
        </div>

        <div className="relative w-[150vw] h-[65vh] overflow-visible ml-25 block sm:hidden z-0">
          <Image
            src="/hero-light.png"
            alt="Hero image"
            fill
            className="rounded-lg shadow-2xl mb-30 block dark:hidden object-cover object-left"
            priority
          />
        </div>

        <div className="block sm:hidden">
          <Image
            src="/phone-light.png"
            alt="Hero image"
            width={1140}
            height={600}
            className="w-[55%] h-auto rounded-lg object-contain box-border -mt-110 z-100 mr-20 block dark:hidden"
            priority
          />
        </div>

        <div className="hidden sm:block">
          <Image
            src="/phone-light.png"
            alt="Hero image"
            width={1140}
            height={600}
            className="w-[30%] h-auto rounded-lg object-contain box-border -mt-170 mr-20 ml-auto block dark:hidden"
            priority
          />
        </div>
      </div>

      <div className="hidden dark:block">
        <div className="hidden sm:block">
          <Image
            src="/hero-dark.png"
            alt="Hero image"
            width={1140}
            height={600}
            className="h-auto rounded-lg object-contain box-border shadow-2xl mb-30 hidden dark:block"
            priority
          />
        </div>

        <div className="relative w-[150vw] h-[65vh] overflow-visible ml-25 block sm:hidden z-0">
          <Image
            src="/hero-dark.png"
            alt="Hero image"
            fill
            className="rounded-lg shadow-2xl mb-30 hidden dark:block object-cover object-left"
            priority
          />
        </div>

        <div className="block sm:hidden">
          <Image
            src="/phone-dark.png"
            alt="Hero image"
            width={1140}
            height={600}
            className="w-[55%] h-auto rounded-lg object-contain box-border shadow-2xl -mt-110 z-100 mr-20 hidden dark:block"
            priority
          />
        </div>

        <div className="hidden sm:block">
          <Image
            src="/phone-dark.png"
            alt="Hero image"
            width={1140}
            height={600}
            className="w-[30%] h-auto rounded-lg object-contain box-border shadow-2xl -mt-170 mr-20 ml-auto hidden dark:block"
            priority
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col mt-30">
        <input
          type="email"
          placeholder="Enter your email"
          className="outline-none text-2xl sm:text-4xl font-normal mb-6 text-center w-full overflow-wrap"
        />
        <button className="bg-blue-600 px-7 py-4 rounded-full w-fit text-white mb-20 sm:mb-30 hover:bg-blue-500 text-sm cursor-pointer dark:bg-blue-800 dark:hover:bg-blue-700">
          Request Access
        </button>
      </div>
    </div>
  );
}
