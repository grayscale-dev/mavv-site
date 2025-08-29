"use client";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { useState } from "react";

export default function JoinWaitlist({
  size,
}: {
  size?: "small" | "large" | undefined;
}) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const dialogFooter = (
    <>
      <Button
        label="Cancel"
        size="small"
        link
        onClick={() => setVisible(false)}
      />
      <Button
        label="Join Waitlist"
        size="small"
        onClick={() => validateEmail()}
      />
    </>
  );

  function validateEmail() {
    setValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    submit();
  }

  function submit() {
    console.log("Submitting");
  }

  return (
    <>
      <Button
        label="Join Waitlist"
        size={size}
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Join Waitlist"
        visible={visible}
        className="w-full max-w-xl m-2 sm:m-0"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        footer={dialogFooter}
        dismissableMask={true}
      >
        <div className="flex flex-col gap-3">
          <InputText
            type="email"
            placeholder="Enter your email"
            className="w-full"
            invalid={!validEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={`${validEmail ? "hidden" : "block"} w-full`}>
            <Message
              severity="error"
              text="Please enter a valid email"
              className="w-full"
            />
          </div>
        </div>
      </Dialog>
    </>
  );
}
