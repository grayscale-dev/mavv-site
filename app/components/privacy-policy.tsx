"use client";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        label="Privacy Policy"
        size="small"
        onClick={() => setVisible(true)}
        link
        unstyled
        className="cursor-pointer hover:underline"
      />

      <Dialog
        header="Privacy Policy"
        visible={visible}
        className="w-2xl m-2 sm:m-0"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        dismissableMask={true}
        maximizable={true}
      >
        <section className="space-y-4">
          <p>
            Your privacy matters to us. This Privacy Policy explains how
            <span className="font-semibold">
              Grayscale Development LLC d/b/a Mavv
            </span>
            (<span className="font-semibold">“Mavv,” “we,” “us,”</span> or
            <span className="font-semibold">“our”</span>) collects, uses, and
            shares information in connection with our marketing website located
            at&nbsp;
            <a
              href="https://getmavv.com"
              className="underline underline-offset-2 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              https://getmavv.com
            </a>
            &nbsp;(the <span className="font-semibold">“Site”</span>).
          </p>
          <div className="mt-4 rounded-lg border-l-4 border-blue-500/60 bg-blue-50 p-4 text-sm leading-relaxed text-blue-900">
            <p className="font-semibold">Note:</p>
            <p className="mt-1">
              The Site promotes a prospective software product called
              <span className="font-semibold">mavv</span>. The Site itself does
              <span className="font-semibold">not</span> offer banking or
              financial services and contains no app functionality. This policy
              applies only to the Site.
            </p>
          </div>
        </section>

        <section id="information-we-collect" className="mt-10">
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p className="mt-3">
            We aim to collect only what we need to operate the Site and respond
            to your requests. On this marketing Site, we may collect:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold">Contact Information</span> that
              you voluntarily provide (e.g., your email address) if you join the
              waitlist or contact us.
            </li>
            <li>
              <span className="font-semibold">Communications</span> you send to
              us, such as questions or feedback.
            </li>
            <li>
              <span className="font-semibold">Basic Technical Data</span> that
              is typically provided by your browser or device when you access
              the Site (e.g., IP address, user-agent, and timestamps). We use
              this for security and to keep the Site functioning.
            </li>
          </ul>
        </section>

        <section id="cookies" className="mt-10">
          <h2 className="text-xl font-semibold">Cookies &amp; Tracking</h2>
          <p className="mt-3">
            We do <span className="font-semibold">not</span> use cookies, web
            beacons, or similar tracking technologies on the Site. If we add
            cookies in the future, we will update this policy and (if required)
            request your consent.
          </p>
        </section>

        <section id="use-of-info" className="mt-10">
          <h2 className="text-xl font-semibold">How We Use Information</h2>
          <p className="mt-3">We use the information we collect to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>operate, maintain, and improve the Site;</li>
            <li>respond to your inquiries and manage the waitlist;</li>
            <li>
              send you updates or marketing communications you opt into (you may
              unsubscribe at any time);
            </li>
            <li>
              protect the security, integrity, and availability of the Site; and
            </li>
            <li>comply with legal obligations and enforce our terms.</li>
          </ul>
        </section>

        <section id="sharing" className="mt-10">
          <h2 className="text-xl font-semibold">How We Share Information</h2>
          <p className="mt-3">
            We do <span className="font-semibold">not sell</span> your personal
            information. We may share information:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold">With service providers</span> who
              help us operate the Site (e.g., hosting, email delivery). They may
              only use the information to perform services for us.
            </li>
            <li>
              <span className="font-semibold">For legal reasons</span> (e.g., to
              comply with law, respond to lawful requests, or protect our
              rights, users, or the public).
            </li>
            <li>
              <span className="font-semibold">Business transfers</span> (e.g.,
              merger, acquisition, or asset sale). We will continue to protect
              your information consistent with this policy.
            </li>
          </ul>
        </section>

        <section id="retention" className="mt-10">
          <h2 className="text-xl font-semibold">
            How Long We Keep Information
          </h2>
          <p className="mt-3">
            We keep personal information only as long as necessary to fulfill
            the purposes described above (for example, while you are on the
            waitlist or we are handling a request), unless a longer retention
            period is required or permitted by law.
          </p>
        </section>

        <section id="security" className="mt-10">
          <h2 className="text-xl font-semibold">Security</h2>
          <p className="mt-3">
            We use commercially reasonable safeguards designed to protect
            personal information from unauthorized access, use, or disclosure.
            However, no method of transmission over the Internet or method of
            electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section id="choices" className="mt-10">
          <h2 className="text-xl font-semibold">Your Choices</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold">Email communications:</span> You
              can unsubscribe from marketing emails by using the “unsubscribe”
              link in our messages or by contacting us.
            </li>
            <li>
              <span className="font-semibold">Access, update, or delete:</span>{" "}
              You may request access to, correction of, or deletion of your
              personal information by emailing us. We will respond as required
              by applicable law.
            </li>
          </ul>
        </section>

        <section id="children" className="mt-10">
          <h2 className="text-xl font-semibold">Children’s Privacy</h2>
          <p className="mt-3">
            The Site is not directed to children under 13, and we do not
            knowingly collect personal information from children under 13. If
            you believe a child has provided us with personal information,
            please contact us so we can take appropriate action.
          </p>
        </section>

        <section id="international" className="mt-10">
          <h2 className="text-xl font-semibold">International Users</h2>
          <p className="mt-3">
            We are based in the United States. If you access the Site from
            outside the U.S., you understand that your information may be
            processed in the U.S., where data protection laws may differ from
            those in your country.
          </p>
        </section>

        <section id="third-party-links" className="mt-10">
          <h2 className="text-xl font-semibold">Third-Party Websites</h2>
          <p className="mt-3">
            The Site may link to external websites not operated by us. We are
            not responsible for the privacy practices of those sites. We
            encourage you to review their privacy policies.
          </p>
        </section>

        <section id="changes" className="mt-10">
          <h2 className="text-xl font-semibold">Changes to This Policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. If we make
            material changes, we will post the updated policy on the Site and
            update the “Last Updated” date above. Your continued use of the Site
            after changes become effective means you accept the updated policy.
          </p>
        </section>

        <section id="contact" className="mt-10">
          <h2 className="text-xl font-semibold">How to Contact Us</h2>
          <p className="mt-3">
            Questions or requests regarding this Privacy Policy or your personal
            information? Contact us at:
          </p>
          <address className="mt-2 not-italic leading-relaxed">
            <a
              href="mailto:admin@grayscale-dev.com"
              className="underline underline-offset-2 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              admin@grayscale-dev.com
            </a>
            <br />
            <span className="font-semibold">
              Grayscale Development LLC d/b/a Mavv
            </span>
            <br />
            505 E 2000 S<br />
            Orem, Utah 84058
          </address>
        </section>
        <p className="mt-2 text-sm text-neutral-600">
          <span className="font-semibold">Last Updated: </span>
          <span>08-21-25</span>
        </p>
      </Dialog>
    </>
  );
}
