"use client";

import Link from "next/link";
import JoinWaitlist from "./join-waitlist";
import About from "./about";

export default function Header() {
  return (
    <div className="flex justify-between py-3 items-center rounded-lg">
      <Link href="/">
        <p className="text-2xl tracking-tight font-medium">mavv.</p>
      </Link>

      <div className="flex items-center gap-3">
        <About link={true} />
        <JoinWaitlist size="small" />
      </div>
    </div>
  );
}
