"use client";

import Link from "next/link";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import { useState } from "react";
import JoinWaitlist from "./join-waitlist";
import About from "./about";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const dialogFooter = (
    <>
      <Button
        label="Cancel"
        size="small"
        link
        onClick={() => setVisible(false)}
      />
      <Button label="Join Waitlist" size="small" />
    </>
  );

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
