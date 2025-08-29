"use client";

import Link from "next/link";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import JoinWaitlist from "./join-waitlist";

export default function About({ link = false }: { link?: boolean }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        label="About"
        severity="secondary"
        size="small"
        onClick={() => setVisible(true)}
        link={link}
      />

      <Dialog
        header="About"
        visible={visible}
        className="w-full max-w-xl m-2 sm:m-0"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        dismissableMask={true}
      >
        <div className="text-left px-3">
          <div className="py-10 text-4xl sm:text-6xl font-bold tracking-tight">
            <h1 className="text-neutral-400">
              Most
              <span className="text-neutral-900"> banking apps are noisy.</span>
              &nbsp;Mavv isn’t.
            </h1>
          </div>
          <h2 className="text-2xl font-normal pb-10 text-neutral-400">
            Our mission with Mavv is simple: fix what’s broken in banking apps
            with a human-centered design and a frictionless experience. No
            clutter, no gimmicks—just a clean, reliable view of your money you
            won’t dread opening every day.
          </h2>
        </div>
      </Dialog>
    </>
  );
}
