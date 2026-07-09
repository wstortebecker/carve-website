import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Carve collects, uses, and protects your data. Includes Google API Services Limited Use disclosure.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)] pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Header */}
      <div className="max-w-[720px] mx-auto mb-16 enter">
        <h1 className="font-sans text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] font-normal text-text mb-4">
          Privacy Policy
        </h1>
        <p className="text-[14px] text-text-3">Last updated: 23 June 2026</p>
      </div>

      {/* Body */}
      <div className="max-w-[720px] mx-auto space-y-12 enter-d1">
        {/* 1 */}
        <Section number="1" title="Who we are">
          <P>
            Carve is a product optimization platform for Shopify merchants,
            operated by Carve Labs AB, a company registered in Sweden
            (&ldquo;Carve&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). Carve
            is the data controller for personal data processed through the
            service. We process data on the basis of consent, contract
            performance, legitimate interest, and legal obligations as applicable
            under Article 6 of the GDPR.
          </P>
          <P>
            For privacy questions, data access requests, or to exercise your
            rights under this policy, contact us at{' '}
            <A href="mailto:william@carve.ac">william@carve.ac</A>.
          </P>
        </Section>

        {/* 2 */}
        <Section number="2" title="What data we collect">
          <Sub title="Account data">
            When you sign up, we collect your email address, name, company or
            store name, store URL, store vertical, ecommerce platform, and role.
            Team invitations collect the invited person&rsquo;s email address.
          </Sub>

          <Sub title="Shopify data">
            When you connect your Shopify store, we access your product catalog
            through Shopify&rsquo;s Admin API. This includes product titles,
            descriptions, variants, pricing, inventory, images, tags,
            metafields, SEO fields, and shop information such as domain,
            currency, and plan. We do not access order data, customer data, or
            checkout data.
          </Sub>

          <Sub title="Google Analytics 4 and Google Search Console data">
            When you connect Google Analytics 4 and Google Search Console, we
            access performance metrics for your product pages: sessions,
            conversions, revenue, add-to-cart events, impressions, clicks,
            click-through rate, and search position. We also classify traffic
            sources to distinguish traditional search from AI-referred traffic
            (for example, sessions originating from ChatGPT, Perplexity, or
            Claude).
          </Sub>

          <Sub title="Product catalog uploads">
            If you upload a product feed directly (CSV, XML, or similar), we
            store the feed in full, including any custom columns beyond
            Carve&rsquo;s standard schema. You are responsible for ensuring
            uploaded feeds do not contain end-customer personal data, as Carve
            does not filter or sanitize upload contents.
          </Sub>

          <Sub title="Usage data">
            We collect logs of how you interact with Carve&nbsp;&mdash; which
            features you use, which optimizations you approve or reject, and
            diagnostic information such as processing times and error states.
          </Sub>
        </Section>

        {/* 3 */}
        <Section number="3" title="How we use your data">
          <P>
            We collect only the data necessary to provide and improve the
            service, and we use it only for the purposes described below. If we
            need to use data for a new purpose not covered here, we will update
            this policy and, where required, obtain your consent before doing so.
          </P>

          <div className="mt-6 space-y-4">
            <PurposeRow
              purpose="Providing Carve's core optimization service: analyzing your product catalog, measuring its performance across SEO, on-site conversion, and AI-referred commerce channels, and generating content improvements for you to review and publish."
              basis="Contract performance (Article 6(1)(b)) — we need this data to deliver the service you signed up for."
            />
            <PurposeRow
              purpose="Operating our reinforcement learning loop, which measures the effect of each optimization on your store's performance and uses that signal to improve subsequent recommendations for your store."
              basis="Contract performance (Article 6(1)(b))."
            />
            <PurposeRow
              purpose="Improving Carve's optimization models through aggregated, anonymized patterns, as described in Section 7."
              basis="Legitimate interest (Article 6(1)(f)) — our interest in improving the product, balanced against your rights, and mitigated by the anonymization described in Section 7."
            />
            <PurposeRow
              purpose="Communicating with you about your account, service updates, and product changes."
              basis="Contract performance for service-related communications; consent (Article 6(1)(a)) for marketing, which you can withdraw at any time."
            />
            <PurposeRow
              purpose="Detecting and preventing abuse, fraud, and security incidents."
              basis="Legitimate interest (Article 6(1)(f)) — our interest in protecting Carve, our merchants, and their data against misuse."
            />
            <PurposeRow
              purpose="Complying with legal obligations, including tax, accounting, and lawful requests from authorities."
              basis="Legal obligation (Article 6(1)(c))."
            />
          </div>

          <P className="mt-6">
            Where we rely on legitimate interest, we have assessed our interest
            against the rights and freedoms of the data subjects affected, and
            we have designed our data practices&nbsp;&mdash; including the
            anonymization of cross-merchant aggregates and the scoping of access
            through row-level security&nbsp;&mdash; to minimize the impact on
            those rights. You can object to processing based on legitimate
            interest at any time by contacting us at the email in Section 1.
          </P>
        </Section>

        {/* 4 */}
        <Section number="4" title="Google API Services disclosure">
          <P>
            Carve&rsquo;s use and transfer to any other app of information
            received from Google APIs adheres to the{' '}
            <A href="https://developers.google.com/terms/api-services-user-data-policy">
              Google API Services User Data Policy
            </A>
            , including the Limited Use requirements.
          </P>
          <P>
            Specifically, data we receive through the{' '}
            <code className="text-[13px] font-mono bg-bg-3 px-1.5 py-0.5 rounded">
              webmasters.readonly
            </code>{' '}
            and{' '}
            <code className="text-[13px] font-mono bg-bg-3 px-1.5 py-0.5 rounded">
              analytics.readonly
            </code>{' '}
            OAuth scopes is used to:
          </P>
          <Ul>
            <li>
              Measure the performance of your product pages and display those
              measurements in your Carve dashboard.
            </li>
            <li>
              Compute reward signals that improve content optimization for your
              own store within the Carve application.
            </li>
            <li>
              Contribute, in aggregated and anonymized form only, to
              Carve&rsquo;s product improvement dataset as described in
              Section&nbsp;7.
            </li>
          </Ul>
          <P>
            We do not use Google API data to serve advertisements, including
            retargeting or personalized advertising. We do not transfer Google
            API data to third parties except as necessary to provide the service
            (for example, our infrastructure providers listed in Section 8). We
            do not allow humans to read Google API data except with your explicit
            consent, for security investigations, or to comply with applicable
            law. We do not sell Google API data under any circumstances.
          </P>
        </Section>

        {/* 5 */}
        <Section number="5" title="Shopify data handling">
          <P>
            We access your Shopify store through the Admin API using scopes
            limited to product data. We do not request access to orders,
            customers, checkouts, or other sensitive resources. Shopify
            credentials are encrypted at rest.
          </P>
          <P>
            We honor Shopify&rsquo;s mandatory GDPR webhooks:{' '}
            <code className="text-[13px] font-mono bg-bg-3 px-1.5 py-0.5 rounded">
              customers/data_request
            </code>{' '}
            and{' '}
            <code className="text-[13px] font-mono bg-bg-3 px-1.5 py-0.5 rounded">
              customers/redact
            </code>{' '}
            are acknowledged and logged&nbsp;&mdash; because Carve does not
            store end-customer personal data from Shopify, there is no data to
            return or delete.{' '}
            <code className="text-[13px] font-mono bg-bg-3 px-1.5 py-0.5 rounded">
              shop/redact
            </code>{' '}
            clears any remaining Shopify credentials associated with the shop.
          </P>
          <P>
            When you uninstall Carve from your Shopify store, we clear your
            Shopify access credentials immediately.
          </P>
        </Section>

        {/* 6 */}
        <Section number="6" title="Data retention and deletion">
          <P>
            While your account is active, we retain the data described above to
            provide continuous optimization and performance measurement. Our
            reinforcement learning loop benefits from historical signal, so
            disconnecting a data source does not delete previously synced data.
          </P>
          <P>
            Disconnecting a data source (Shopify, Google Analytics 4, or Google
            Search Console) clears the access credentials for that source
            immediately. Historical data already synced from that source is
            retained for the duration of your Carve account so that you can
            reconnect without losing continuity.
          </P>
          <P>
            Deleting your account triggers permanent deletion of all data
            associated with your workspace: merchant profiles, product catalogs,
            feed runs, optimizations, analytics data, scoring history, team
            members, and activity logs. Deletion is irreversible. To delete your
            account, use the workspace deletion function in Carve or contact us
            at the email in Section 1.
          </P>
        </Section>

        {/* 7 */}
        <Section number="7" title="Machine learning and product improvement">
          <P>
            Carve uses machine learning to identify patterns in what kinds of
            product content perform well across different categories and
            verticals. To support this, we retain aggregated and anonymized
            statistical patterns derived from historical performance
            data&nbsp;&mdash; such as which content structures tend to perform
            well within a product category. These aggregates contain no
            merchant-identifying information and cannot be linked back to any
            individual merchant or store. Under GDPR Recital 26, data that has
            been anonymized in this way falls outside the scope of personal data
            protections, and we retain it as part of Carve&rsquo;s product
            improvement dataset. Account deletion removes all
            merchant-identifiable data but does not remove contributions that
            have already been incorporated into these anonymized aggregates.
          </P>
          <P>
            We do not transfer merchant data to third-party AI providers for the
            purpose of training their models. Prompts sent to OpenAI and
            Perplexity for optimization generation are covered by those
            providers&rsquo; standard API terms, under which API inputs are not
            used for model training by default.
          </P>
        </Section>

        {/* 8 */}
        <Section number="8" title="Subprocessors">
          <P>
            We share data with the following service providers strictly to
            operate Carve:
          </P>
          <Ul>
            <li>
              <strong className="font-medium text-text">Supabase</strong>{' '}
              &mdash; database and authentication
            </li>
            <li>
              <strong className="font-medium text-text">Vercel</strong> &mdash;
              application hosting and serverless compute
            </li>
            <li>
              <strong className="font-medium text-text">OpenAI</strong> &mdash;
              large language model inference for content analysis and
              optimization generation
            </li>
            <li>
              <strong className="font-medium text-text">Perplexity</strong>{' '}
              &mdash; product data enrichment via web search
            </li>
            <li>
              <strong className="font-medium text-text">Upstash</strong> &mdash;
              job queue infrastructure
            </li>
            <li>
              <strong className="font-medium text-text">
                Shopify, Google
              </strong>{' '}
              &mdash; source platforms you explicitly connect
            </li>
          </Ul>
          <P>
            Each provider accesses data only as needed to deliver its part of
            the service. We do not sell data to any third party.
          </P>
        </Section>

        {/* 9 */}
        <Section number="9" title="Business transfers">
          <P>
            If Carve is acquired, merged, or restructured&nbsp;&mdash; including
            changes to the legal entity that operates the service&nbsp;&mdash;
            merchant data may transfer to the successor entity as part of that
            transaction. We will notify active users of any such transfer and
            update this policy to reflect the new controller. The successor
            entity will be bound by the commitments in this policy until a new
            policy is published and users are given notice of the change.
          </P>
        </Section>

        {/* 10 */}
        <Section number="10" title="International transfers">
          <P>
            Carve is operated from Sweden, within the European Economic Area.
            Some of our subprocessors are located in the United States, including
            OpenAI, Vercel, and Supabase (depending on the selected region).
            Transfers to the United States rely on the EU-US Data Privacy
            Framework, where the provider is certified, and on Standard
            Contractual Clauses with each provider as a supplementary safeguard.
          </P>
        </Section>

        {/* 11 */}
        <Section number="11" title="Your rights">
          <P>
            If you are in the European Economic Area, the United Kingdom, or
            another jurisdiction with comparable data protection laws, you have
            the right to access the personal data we hold about you, request
            correction or deletion, object to or restrict processing, withdraw
            consent where we rely on it, and request portability of your data. To
            exercise any of these rights, contact us at the email in Section 1.
            We will respond within 30 days.
          </P>
          <P>
            You also have the right to lodge a complaint with your local data
            protection authority. In Sweden this is Integritetsskyddsmyndigheten
            (IMY). If you are based elsewhere in the EEA, you may contact your
            national data protection authority.
          </P>
        </Section>

        {/* 12 */}
        <Section number="12" title="Children's data">
          <P>
            Carve is a business-to-business service intended for Shopify
            merchants and their team members, and is not directed at children. We
            do not knowingly collect personal data from individuals under the age
            of 16. If you believe a child has provided us with personal data,
            please contact us at the email in Section 1 and we will delete it
            promptly.
          </P>
        </Section>

        {/* 13 */}
        <Section number="13" title="Data breach notification">
          <P>
            In the event of a personal data breach affecting your data, we will
            notify the relevant supervisory authority within 72 hours of becoming
            aware of the breach, as required by Article 33 of the GDPR. Where
            the breach is likely to result in a high risk to your rights and
            freedoms, we will also notify you directly without undue delay, as
            required by Article 34.
          </P>
        </Section>

        {/* 14 */}
        <Section number="14" title="Security">
          <P>
            We encrypt sensitive credentials at rest using AES-256-GCM, use TLS
            for all data in transit, enforce row-level security on merchant data
            in our database, and limit administrative access to authorized
            personnel. No system is perfectly secure, but we take reasonable
            steps to protect the data you entrust to us.
          </P>
        </Section>

        {/* 15 */}
        <Section number="15" title="Changes to this policy">
          <P>
            We may update this policy as Carve evolves. Material changes will be
            communicated to active users by email. The &ldquo;Last
            updated&rdquo; date at the top of this policy reflects the most
            recent revision.
          </P>
        </Section>

        {/* 16 */}
        <Section number="16" title="Contact">
          <P>
            Questions, concerns, data requests, or complaints:{' '}
            <A href="mailto:william@carve.ac">william@carve.ac</A>
          </P>
          <P>Carve Labs AB, Sweden</P>
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

function Sub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-sans text-[15px] font-medium text-text mb-1">
        {title}
      </h3>
      <p className="text-[15px] leading-[1.65] text-text-2">{children}</p>
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

function PurposeRow({
  purpose,
  basis,
}: {
  purpose: string;
  basis: string;
}) {
  return (
    <div className="border border-border rounded-[10px] p-5">
      <p className="text-[15px] leading-[1.65] text-text-2 mb-3">{purpose}</p>
      <p className="text-[13px] leading-[1.55] text-text-3">
        <span className="font-medium text-text-2">Legal basis: </span>
        {basis}
      </p>
    </div>
  );
}
