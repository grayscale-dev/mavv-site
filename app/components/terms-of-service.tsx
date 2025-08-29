"use client";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export default function TermsOfService() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        label="Terms of Service"
        size="small"
        onClick={() => setVisible(true)}
        link
        unstyled
        className="cursor-pointer hover:underline"
      />

      <Dialog
        header="Terms of Service"
        visible={visible}
        className="w-2xl m-2 sm:m-0"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        dismissableMask={true}
        maximizable={true}
        draggable={false}
      >
        <section className="space-y-4">
          <p>
            These Terms of Service (
            <span className="font-semibold">"Terms"</span>) are a binding
            agreement between
            <span className="font-semibold">
              &nbsp;Grayscale Development LLC d/b/a Mavv
            </span>
            (<span className="font-semibold">"Mavv," "we," "us,"</span> or
            <span className="font-semibold">"our"</span>) and you (
            <span className="font-semibold">"you"</span> or
            <span className="font-semibold">"user"</span>). These Terms govern
            your access to and use of our marketing website located at&nbsp;
            <a
              href="https://getmavv.com"
              className="underline underline-offset-2 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              https://getmavv.com
            </a>
            &nbsp;and any related pages that link to these Terms (collectively,
            the
            <span className="font-semibold">"Site"</span>).
          </p>
          <p>
            By accessing or using the Site, you agree to be bound by these Terms
            and our <span className="font-semibold">Privacy Policy</span> (which
            is incorporated by reference). If you do not agree, do not access or
            use the Site.
          </p>
          <div className="mt-4 rounded-lg border-l-4 border-blue-500/60 bg-blue-50 p-4 text-sm leading-relaxed text-blue-900">
            <p className="font-semibold">Important:</p>
            <p className="mt-1">
              The Site promotes and provides information about a prospective
              software product called{" "}
              <span className="font-semibold">mavv</span>. The Site itself does{" "}
              <span className="font-semibold">not</span> provide banking
              services, financial services, or the application’s functionality.
              Nothing on the Site is financial, legal, tax, or investment
              advice, and nothing on the Site is an offer to provide regulated
              services.
            </p>
          </div>
        </section>

        <section id="eligibility" className="mt-10">
          <h2 className="text-xl font-semibold">
            1) Eligibility &amp; Use of the Site
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              You must be at least 13 years old (or the age of digital consent
              in your jurisdiction) to use the Site. If you are under 18, you
              may use the Site only with the consent of a parent or legal
              guardian.
            </li>
            <li>
              You may use the Site only for lawful purposes and in accordance
              with these Terms.
            </li>
          </ul>
        </section>

        <section id="marketing" className="mt-10">
          <h2 className="text-xl font-semibold">
            2) Marketing-Only Nature; No Offers or Advice
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              The Site contains informational and marketing content about mavv.
              Features described may be conceptual, under development, or
              subject to change without notice.
            </li>
            <li>
              The Site is <span className="font-semibold">not</span> a bank or
              financial service.{" "}
              <span className="font-semibold">Mavv is not a bank.</span>
              References to banking or financial features are descriptive of
              potential future offerings and do not constitute an offer or
              commitment to provide such services.
            </li>
            <li>
              Nothing on the Site constitutes financial, investment, legal,
              accounting, or tax advice. If you have questions about financial
              decisions, consult a qualified professional.
            </li>
          </ul>
        </section>

        <section id="communications" className="mt-10">
          <h2 className="text-xl font-semibold">
            3) Accountless Experience; Waitlist &amp; Communications
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              The Site may offer forms to join a waitlist, request information,
              or contact us. By submitting your information, you consent to our
              contacting you via the channels you provide (e.g., email or, if
              applicable, SMS). You may opt out as described in those
              communications.
            </li>
            <li>
              You represent that the information you provide is accurate and
              that you have authority to provide it.
            </li>
          </ul>
        </section>

        <section id="ip" className="mt-10">
          <h2 className="text-xl font-semibold">
            4) Intellectual Property; Limited License
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              The Site and its content—including text, images, graphics, logos,
              trademarks, and layout—are owned by Mavv or our licensors and are
              protected by intellectual property laws.
            </li>
            <li>
              We grant you a limited, revocable, non-exclusive, non-transferable
              license to access and view the Site for your personal,
              non-commercial use. Except as expressly permitted, you may not:
              (a) copy, modify, or create derivative works; (b) distribute,
              sell, lease, or sublicense the Site or its content; (c) reverse
              engineer or attempt to extract source code; or (d) remove
              proprietary notices.
            </li>
            <li>
              If you submit feedback, suggestions, or ideas (“Feedback”), you
              grant us a perpetual, irrevocable, worldwide, royalty-free license
              to use the Feedback for any purpose without compensation to you.
            </li>
          </ul>
        </section>

        <section id="acceptable-use" className="mt-10">
          <h2 className="text-xl font-semibold">5) Acceptable Use</h2>
          <p className="mt-3">You agree not to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>use the Site in any manner that violates applicable law;</li>
            <li>
              attempt to gain unauthorized access to the Site or related
              systems;
            </li>
            <li>
              interfere with, disrupt, or impair the Site’s security, integrity,
              or availability; or
            </li>
            <li>
              use any automated means (e.g., bots, scrapers) to access the Site
              without our prior written permission.
            </li>
          </ul>
        </section>

        <section id="third-party" className="mt-10">
          <h2 className="text-xl font-semibold">
            6) Third-Party Sites &amp; Services
          </h2>
          <p className="mt-3">
            The Site may link to third-party websites or services. We do not
            control and are{" "}
            <span className="font-semibold">not responsible</span> for those
            sites or services. Your use of them is at your own risk and may be
            subject to third-party terms and policies.
          </p>
        </section>

        <section id="disclaimers" className="mt-10">
          <h2 className="text-xl font-semibold">7) Disclaimers</h2>
          <p className="mt-3">
            THE SITE AND ALL CONTENT ARE PROVIDED
            <span className="font-semibold">“AS IS”</span> AND
            <span className="font-semibold">“AS AVAILABLE.”</span> TO THE
            MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM
            <span className="font-semibold">ALL WARRANTIES</span>, EXPRESS OR
            IMPLIED, INCLUDING{" "}
            <span className="font-semibold">MERCHANTABILITY</span>,
            <span className="font-semibold">
              FITNESS FOR A PARTICULAR PURPOSE
            </span>
            ,<span className="font-semibold">TITLE</span>,
            <span className="font-semibold">NON-INFRINGEMENT</span>, AND ANY
            WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. WE DO
            NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, SECURE, OR
            ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.
          </p>
        </section>

        <section id="limitation" className="mt-10">
          <h2 className="text-xl font-semibold">8) Limitation of Liability</h2>
          <p className="mt-3">
            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL MAVV
            (INCLUDING OUR AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
            OR SUPPLIERS) BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF
            PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATING TO
            YOUR USE OF (OR INABILITY TO USE) THE SITE, EVEN IF WE HAVE BEEN
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR
            ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SITE WILL
            NOT EXCEED
            <span className="font-semibold">
              ONE HUNDRED U.S. DOLLARS (US $100)
            </span>
            .
          </p>
          <p className="mt-3">
            Some jurisdictions do not allow certain limitations of liability; in
            those jurisdictions, our liability will be limited to the greatest
            extent permitted by law.
          </p>
        </section>

        <section id="indemnification" className="mt-10">
          <h2 className="text-xl font-semibold">9) Indemnification</h2>
          <p className="mt-3">
            You agree to{" "}
            <span className="font-semibold">
              defend, indemnify, and hold harmless
            </span>
            Mavv and our affiliates, officers, directors, employees, and agents
            from and against any claims, liabilities, damages, losses, and
            expenses (including reasonable attorneys’ fees) arising out of or
            related to your violation of these Terms or your misuse of the Site.
          </p>
        </section>

        <section id="changes" className="mt-10">
          <h2 className="text-xl font-semibold">
            10) Changes to the Site and to These Terms
          </h2>
          <p className="mt-3">
            We may modify or discontinue all or part of the Site at any time
            without notice. We may also update these Terms from time to time.
            The “Last Updated” date indicates when these Terms were last
            revised. Your continued use of the Site after any changes means you
            accept the updated Terms.
          </p>
        </section>

        <section id="termination" className="mt-10">
          <h2 className="text-xl font-semibold">11) Termination</h2>
          <p className="mt-3">
            We may suspend or terminate your access to the Site at any time, for
            any reason or no reason, including if we believe you have violated
            these Terms. Upon termination, the license granted to you under
            Section 4 ends immediately.
          </p>
        </section>

        <section id="governing-law" className="mt-10">
          <h2 className="text-xl font-semibold">12) Governing Law; Venue</h2>
          <p className="mt-3">
            These Terms are governed by the laws of the
            <span className="font-semibold">State of Utah</span>, without regard
            to conflict-of-laws rules. You and Mavv agree to the
            <span className="font-semibold">
              exclusive jurisdiction and venue
            </span>{" "}
            of the state and federal courts located in
            <span className="font-semibold">Salt Lake County, Utah</span> for
            any action not subject to arbitration (if applicable) and for any
            requests for injunctive or equitable relief.
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            If you prefer a different governing law or venue, replace Utah with
            your desired state/jurisdiction before publishing.
          </p>
        </section>

        <section id="export" className="mt-10">
          <h2 className="text-xl font-semibold">
            13) Export &amp; International Use
          </h2>
          <p className="mt-3">
            You are responsible for compliance with local laws. Accessing the
            Site from territories where its content is illegal is prohibited.
            You represent you are not located in, under the control of, or a
            national or resident of any embargoed country or on any U.S.
            government denied-party list.
          </p>
        </section>

        <section id="misc" className="mt-10">
          <h2 className="text-xl font-semibold">14) Miscellaneous</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold">Severability.</span> If any
              provision is found unenforceable, it will be modified to the
              minimum extent necessary or severed, and the remaining provisions
              will remain in effect.
            </li>
            <li>
              <span className="font-semibold">No Waiver.</span> Our failure to
              enforce any right or provision is not a waiver of such right or
              provision.
            </li>
            <li>
              <span className="font-semibold">Entire Agreement.</span> These
              Terms constitute the entire agreement between you and us regarding
              the Site and supersede all prior or contemporaneous understandings
              regarding the Site.
            </li>
            <li>
              <span className="font-semibold">Assignment.</span> You may not
              assign or transfer these Terms; we may assign them without
              restriction.
            </li>
          </ul>
        </section>

        <section id="contact" className="mt-10">
          <h2 className="text-xl font-semibold">15) Contact</h2>
          <p className="mt-3">
            Questions about these Terms can be sent to
            <a
              href="mailto:admin@grayscale-dev.com"
              className="underline underline-offset-2 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              &nbsp;admin@grayscale-dev.com&nbsp;
            </a>
            or by mail to:
          </p>
          <address className="mt-2 not-italic leading-relaxed">
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
