import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms governing your use of Carve, operated by Carve Labs AB.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <section className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)] pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Header */}
      <div className="max-w-[720px] mx-auto mb-16 enter">
        <h1 className="font-sans text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] font-normal text-text mb-4">
          Terms of Service
        </h1>
        <p className="text-[14px] text-text-3">Last updated: 23 June 2026</p>
      </div>

      {/* Body */}
      <div className="max-w-[720px] mx-auto space-y-12 enter-d1">
        <Section number="1" title="About Carve">
          <P>
            Carve (&ldquo;Carve&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) is a service operated by Carve Labs AB
            (&ldquo;the Provider&rdquo;), a company registered in Sweden. The
            Provider may, at its sole discretion and without prior notice,
            assign, transfer, or novate this agreement and all related rights
            and obligations to any affiliated or successor entity, provided
            that the assignee assumes all obligations under these Terms.
            Continued use of the Service after such transfer constitutes
            acceptance of the new contracting entity.
          </P>
        </Section>

        <Section number="2" title="The Service">
          <P>
            Carve is a service that analyzes and optimizes product content for
            search engines, on-page conversion, and AI-driven commerce
            surfaces. We reserve the right to modify pricing, introduce or
            change plans, modify features, or discontinue the Service at any
            time.
          </P>
        </Section>

        <Section number="3" title="Eligibility and Account">
          <P>
            You must have authority to bind the entity on whose behalf you use
            the Service to these Terms. You are responsible for the accuracy
            of information you provide and for all activity under your
            account.
          </P>
        </Section>

        <Section number="4" title="Your Content and Data">
          <P>
            You retain all ownership rights to your product data, store data,
            and any content you submit to or generate through the Service
            (&ldquo;Merchant Content&rdquo;). You grant Carve a worldwide,
            non-exclusive, royalty-free license to access, store, process,
            modify, and display Merchant Content as necessary to provide the
            Service and as further set out in Section 5.
          </P>
        </Section>

        <Section
          number="5"
          title="Use of Data for Model Training and Service Improvement"
        >
          <P>
            By using the Service, you expressly grant Carve a perpetual,
            irrevocable, worldwide, royalty-free right to use Merchant Content
            to train, evaluate, fine-tune, and improve Carve&rsquo;s machine
            learning models, scoring systems, and the Service generally
            &mdash; including in models and outputs that benefit other Carve
            customers.
          </P>
          <P>You acknowledge and agree that:</P>
          <Ul>
            <li>
              (a) This includes use of your product data, content, performance
              metrics, and the outputs of Carve&rsquo;s optimization processes,
              in raw, derived, aggregated, anonymized, or de-identified form;
            </li>
            <li>
              (b) Trained model weights, embeddings, and learned signals are
              not &ldquo;your data&rdquo; and are not subject to deletion,
              return, or restriction upon termination of your account;
            </li>
            <li>
              (c) This grant is a material condition of providing the Service.
              If you do not agree, do not use the Service;
            </li>
            <li>
              (d) You represent and warrant that you have the right to grant
              this license with respect to all Merchant Content you submit,
              including any rights required from your own customers,
              suppliers, or third parties;
            </li>
            <li>
              (e) For any personal data within Merchant Content, you are
              responsible as data controller for ensuring you have a lawful
              basis under applicable data protection law to share such data
              with Carve for the purposes set out in this Section 5. Carve
              will not knowingly use personal data for cross-customer model
              training and will apply anonymization and aggregation techniques
              to Merchant Content prior to such use.
            </li>
          </Ul>
          <P>
            This Section 5 survives termination of these Terms with respect to
            any Merchant Content already used in model training prior to
            termination.
          </P>
        </Section>

        <Section number="6" title="Personal Data and GDPR">
          <P>
            Carve processes personal data in accordance with our Privacy
            Policy. Where Carve processes personal data on your behalf, Carve
            acts as a data processor and you act as the data controller. A
            separate Data Processing Agreement governs this relationship and
            is incorporated into these Terms by reference.
          </P>
        </Section>

        <Section number="7" title="Acceptable Use">
          <P>
            You agree not to: (a) use the Service in violation of any law or
            third-party right, including the terms of any platform you connect
            to the Service; (b) attempt to reverse-engineer, decompile, or
            extract the underlying models or proprietary scoring logic of the
            Service; (c) use the Service to process content you do not own or
            have rights to; (d) interfere with or disrupt the Service.
          </P>
        </Section>

        <Section number="8" title="Third-Party Services">
          <P>
            The Service depends on third-party providers, as well as any
            commerce or analytics platforms you choose to connect. A current
            list of sub-processors is maintained at carve.ac/subprocessors. We
            are not responsible for the availability, accuracy, or actions of
            these third parties. Your use of integrated third-party services
            is governed by their respective terms.
          </P>
        </Section>

        <Section number="9" title="No Warranty">
          <P>
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo;, without warranties of any kind, express or
            implied, including warranties of merchantability, fitness for a
            particular purpose, non-infringement, or that the Service will
            improve search rankings, traffic, conversion rates, or revenue.
          </P>
          <P>
            You acknowledge that AI-generated content and optimizations may
            contain errors, and you are solely responsible for reviewing and
            approving any changes published to your store or other channels.
          </P>
        </Section>

        <Section number="10" title="Limitation of Liability">
          <P>
            To the maximum extent permitted by law, in no event shall Carve,
            Carve Labs AB, its affiliates, or any successor entity be liable for
            any indirect, incidental, consequential, special, or punitive
            damages, or any loss of revenue, profits, data, or goodwill,
            arising from or related to your use of the Service.
          </P>
          <P>
            Carve&rsquo;s total aggregate liability under this agreement shall
            not exceed the greater of (a) amounts paid by you to Carve in the
            twelve (12) months preceding the claim, or (b) one hundred euros
            (&euro;100).
          </P>
          <P>
            The limitations in this Section 10 do not apply to: (a) liability
            that cannot be excluded under applicable law; (b) Carve&rsquo;s
            gross negligence or willful misconduct; (c) breach of
            confidentiality obligations; or (d) indemnification obligations
            expressly set out in these Terms.
          </P>
        </Section>

        <Section number="11" title="Indemnification">
          <P>
            You agree to indemnify and hold harmless Carve, Carve Labs AB, and
            their successors from any claims arising from your Merchant
            Content, your use of the Service, or your violation of these Terms
            or any third-party rights.
          </P>
        </Section>

        <Section number="12" title="Termination">
          <P>
            You may stop using the Service at any time by disconnecting your
            account or stores. We may suspend or terminate your access at any
            time, with or without cause or notice. Upon termination, the
            rights granted in Section 5 survive with respect to data already
            used in model training; all other Merchant Content will be deleted
            within 90 days, subject to legal retention requirements.
          </P>
        </Section>

        <Section number="13" title="Changes to These Terms">
          <P>
            We may update these Terms at any time. Material changes will be
            communicated by email or through the Service. Continued use after
            changes constitutes acceptance.
          </P>
        </Section>

        <Section number="14" title="Governing Law and Disputes">
          <P>
            These Terms are governed by the laws of Sweden, without regard to
            conflict of laws principles. Any disputes shall be resolved in the
            courts of Stockholm, Sweden, except where mandatory consumer
            protection law grants you the right to bring proceedings in your
            country of residence.
          </P>
        </Section>

        <Section number="15" title="Miscellaneous">
          <P>
            If any provision of these Terms is held unenforceable, the
            remaining provisions remain in effect. Our failure to enforce any
            right is not a waiver. These Terms constitute the entire agreement
            between you and Carve regarding the Service, together with the
            Privacy Policy and Data Processing Agreement.
          </P>
        </Section>

        <Section number="16" title="Contact">
          <P>
            Questions:{' '}
            <A href="mailto:william@carve.ac">william@carve.ac</A>
          </P>
        </Section>
      </div>
    </section>
  );
}

/* ── Local components ──────────────────────────────────────────── */

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-sans text-[22px] leading-[1.25] tracking-[-0.015em] font-medium text-text mb-4">
        {number}. {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function P({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[15px] leading-[1.65] text-text-2 ${className}`}>
      {children}
    </p>
  );
}

function A({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-accent underline underline-offset-2 hover:text-accent-h transition-colors"
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
    >
      {children}
    </a>
  );
}

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-[15px] leading-[1.65] text-text-2">
      {children}
    </ul>
  );
}
