"use client";

import TermsOfService from "./terms-of-service";
import PrivacyPolicy from "./privacy-policy";

export default function Footer() {
  return (
    <div className="w-full border-t border-neutral-200 mt-10">
      <div className="px-5 py-8 max-w-[1140px] font-normal text-neutral-400 m-auto h-full text-sm">
        © 2025 Mavv
        <div className="block">
          <TermsOfService />
          <span> • </span>
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  );
}
