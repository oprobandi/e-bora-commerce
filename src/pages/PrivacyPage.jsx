import { Link } from 'react-router-dom'

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-display font-bold text-lg text-ink mb-3 pb-2 border-b border-ebora-border">{title}</h2>
    <div className="text-sm text-ink-2 leading-relaxed space-y-3">{children}</div>
  </div>
)

const Table = ({ rows }) => (
  <div className="overflow-x-auto rounded-xl border border-ebora-border my-3">
    <table className="w-full text-xs">
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-ebora-bg' : 'bg-white'}>
            {row.map((cell, j) => (
              <td key={j} className={`px-4 py-2.5 ${j === 0 ? 'font-semibold text-ink w-1/3' : 'text-ink-2'}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ebora-bg">
      {/* Header */}
      <div className="bg-white border-b border-ebora-border sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/" className="text-ink-3 hover:text-primary transition-colors">
            <i className="fas fa-arrow-left" />
          </Link>
          <span className="font-display font-bold text-base text-ink">Privacy Policy</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Title block */}
        <div className="bg-white rounded-2xl border border-ebora-border p-6 mb-6">
          <h1 className="font-display font-extrabold text-2xl text-ink mb-1">Privacy Policy</h1>
          <p className="text-sm text-ink-3">E-Bora Commerce Ltd · Last updated 20 March 2026</p>
          <p className="text-sm text-ink-2 mt-3 leading-relaxed">
            We are committed to protecting your personal data. This policy explains what we collect, how we use it, and your rights — in plain language.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-ebora-border p-6 space-y-0">

          <Section title="1. Who We Are">
            <p>E-Bora Commerce Ltd operates <strong>eboracommerce.com</strong> and is registered in Nairobi, Kenya.</p>
            <Table rows={[
              ['Email', 'privacy@eboracommerce.com'],
              ['DPO', 'dpo@eboracommerce.com'],
              ['Phone', '+254 799 644 100'],
            ]} />
          </Section>

          <Section title="2. Data We Collect">
            <p>We only collect what we need to serve you:</p>
            <Table rows={[
              ['Identity', 'Full name'],
              ['Contact', 'Phone number, email address'],
              ['Delivery', 'County, street address'],
              ['Payment', 'M-Pesa number, payment method (we never store card numbers or PINs)'],
              ['Account', 'Username, hashed password'],
              ['Usage', 'Pages visited, products viewed, search terms'],
            ]} />
          </Section>

          <Section title="3. How We Use Your Data">
            <Table rows={[
              ['Processing your orders', 'Contract'],
              ['Sending delivery updates', 'Contract'],
              ['Customer support', 'Contract / Legitimate interest'],
              ['Fraud prevention', 'Legal obligation'],
              ['Marketing emails/SMS', 'Consent (opt-in only)'],
              ['Improving the site', 'Legitimate interest'],
            ]} />
          </Section>

          <Section title="4. Who We Share Data With">
            <p>We do not sell your data. We share it only with:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Delivery couriers</strong> — to fulfil your order</li>
              <li><strong>Payment processors</strong> — Safaricom M-Pesa, PesaPal, Equity, KCB</li>
              <li><strong>Hosting</strong> — Vercel (servers in USA/EU, adequacy safeguards apply)</li>
              <li><strong>Legal authorities</strong> — when required by Kenyan law or court order</li>
            </ul>
          </Section>

          <Section title="5. How Long We Keep Data">
            <Table rows={[
              ['Order records', '7 years (Kenyan tax law)'],
              ['Account data', 'Until account closed + 2 years'],
              ['Analytics logs', '13 months rolling'],
              ['Marketing consent', 'Until withdrawn + 3 years'],
            ]} />
          </Section>

          <Section title="6. Your Rights">
            <p>Under Kenyan law you can ask us to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Access</strong> a copy of your data</li>
              <li><strong>Correct</strong> inaccurate data</li>
              <li><strong>Delete</strong> your data (where no legal obligation to keep it exists)</li>
              <li><strong>Port</strong> your data to another service</li>
              <li><strong>Object</strong> to direct marketing at any time</li>
            </ul>
            <p className="mt-3">Email <strong>privacy@eboracommerce.com</strong> — we respond within 21 days. If unsatisfied, contact the <strong>Office of the Data Protection Commissioner</strong> at odpc.go.ke.</p>
          </Section>

          <Section title="7. Cookies">
            <Table rows={[
              ['Essential', 'Cart, wishlist, session — always on, cannot be declined'],
              ['Analytics', 'Anonymous usage stats — can be declined'],
              ['Preferences', 'Settings and personalisation — can be declined'],
            ]} />
            <p>Manage your preference via the cookie banner or by clearing browser storage.</p>
          </Section>

          <Section title="8. Security">
            <p>All data is transmitted over HTTPS/TLS. Card numbers and M-Pesa PINs are never stored by us — they go directly to licensed payment processors. Access to personal data is restricted to staff who need it.</p>
          </Section>

          <Section title="9. Children">
            <p>Our Platform is not for users under 18. If you believe a minor has shared data with us, contact <strong>privacy@eboracommerce.com</strong> and we will delete it immediately.</p>
          </Section>

          <Section title="10. Changes">
            <p>We will notify you of material changes via a site notice or email at least 14 days before they take effect.</p>
          </Section>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-primary hover:underline">← Back to store</Link>
          <span className="mx-3 text-ink-3">·</span>
          <Link to="/terms" className="text-sm text-primary hover:underline">Terms of Service →</Link>
        </div>
      </div>
    </div>
  )
}
