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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ebora-bg">
      {/* Header */}
      <div className="bg-white border-b border-ebora-border sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/" className="text-ink-3 hover:text-primary transition-colors">
            <i className="fas fa-arrow-left" />
          </Link>
          <span className="font-display font-bold text-base text-ink">Terms of Service</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Title block */}
        <div className="bg-white rounded-2xl border border-ebora-border p-6 mb-6">
          <h1 className="font-display font-extrabold text-2xl text-ink mb-1">Terms of Service</h1>
          <p className="text-sm text-ink-3">E-Bora Commerce Ltd · Last updated 20 March 2026</p>
          <p className="text-sm text-ink-2 mt-3 leading-relaxed">
            By using our Platform or placing an order, you agree to these Terms. They are governed by the laws of Kenya.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-ebora-border p-6">

          <Section title="1. Eligibility">
            <p>You must be at least <strong>18 years old</strong> to use our Platform or place an order. By using E-Bora Commerce, you confirm you meet this requirement.</p>
          </Section>

          <Section title="2. Your Account">
            <ul className="list-disc list-inside space-y-1">
              <li>Provide accurate information when registering</li>
              <li>Keep your login credentials secure</li>
              <li>Notify us immediately of any unauthorised account access</li>
              <li>You are responsible for all activity under your account</li>
            </ul>
          </Section>

          <Section title="3. Products & Availability">
            <p>All products are genuine and sourced from authorised distributors. Images are illustrative — colours may vary by screen. All products are subject to availability. We reserve the right to limit quantities or refuse orders.</p>
          </Section>

          <Section title="4. Pricing & Payment">
            <p>All prices are in <strong>Kenya Shillings (KES)</strong> and include applicable taxes. The price at checkout is the price you pay. We accept:</p>
            <Table rows={[
              ['M-Pesa', 'Safaricom STK Push to your registered number'],
              ['Visa / Mastercard', 'Processed via secure payment gateway'],
              ['Cash on Delivery', 'Selected areas only'],
              ['Equity, KCB, Fuliza, PesaPal', 'Where shown at checkout'],
            ]} />
            <p>We never store card numbers or M-Pesa PINs. In the event of a pricing error, we reserve the right to cancel and refund the order.</p>
          </Section>

          <Section title="5. Orders & Contract">
            <p>Placing an order is an offer to purchase. A binding contract forms when we <strong>dispatch</strong> your order and send a dispatch confirmation. We may decline any order before dispatch.</p>
            <p>You may cancel before dispatch by calling <strong>0799 644 100</strong>. After dispatch, our Returns policy applies.</p>
          </Section>

          <Section title="6. Delivery">
            <Table rows={[
              ['Nairobi (CBD & suburbs)', 'Same day or next day — Free'],
              ['Nairobi outskirts', '1–2 business days — Free'],
              ['Mombasa, Kisumu, Nakuru, Eldoret', '2–3 business days — KSh 300'],
              ['All other counties', '3–5 business days — KSh 300'],
            ]} />
            <p>Timeframes are estimates. Risk passes to you on delivery. Title passes on full payment.</p>
          </Section>

          <Section title="7. Warranty">
            <p>All products carry the manufacturer's standard Kenya warranty. To make a claim contact <strong>support@eboracommerce.com</strong> with your order number. Warranties do not cover physical damage, liquid damage, misuse, or normal wear and tear.</p>
          </Section>

          <Section title="8. Returns & Refunds">
            <p>Return most products within <strong>14 days of delivery</strong> in original, unused condition with original packaging.</p>
            <p><strong>Non-returnable:</strong> opened software, activated SIM cards, personalised items, and products with broken hygiene seals.</p>
            <p><strong>Faulty or wrong items:</strong> contact us within 48 hours of delivery with photos. We cover return shipping and will repair, replace, or refund.</p>
            <Table rows={[
              ['M-Pesa refunds', 'Within 24 hours of approval'],
              ['Card refunds', '5–7 business days (subject to your bank)'],
              ['Cash on Delivery refunds', 'Via M-Pesa to your number'],
            ]} />
          </Section>

          <Section title="9. Intellectual Property">
            <p>All content on our Platform — text, logos, images, and code — belongs to E-Bora Commerce Ltd or its licensors. You may not reproduce or use it commercially without our written permission.</p>
          </Section>

          <Section title="10. Prohibited Conduct">
            <ul className="list-disc list-inside space-y-1">
              <li>Using the Platform for any unlawful purpose</li>
              <li>Posting false or defamatory reviews</li>
              <li>Attempting to hack or scrape the Platform</li>
              <li>Placing fraudulent orders or chargeback fraud</li>
              <li>Harassing staff or other users</li>
            </ul>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>To the maximum extent permitted by Kenyan law, our liability is limited to the amount you paid for the relevant products. We are not liable for indirect or consequential losses. We do not limit liability for death, personal injury from our negligence, or fraud.</p>
          </Section>

          <Section title="12. Disputes">
            <p>Contact us first at <strong>support@eboracommerce.com</strong> — we resolve most issues within 14 business days. Unresolved disputes are subject to the jurisdiction of <strong>Kenyan courts</strong>. You may also refer to the <strong>Competition Authority of Kenya (CAK)</strong>.</p>
          </Section>

          <Section title="13. Changes to These Terms">
            <p>We will notify you of material changes at least 14 days before they take effect via a site notice or email. Continued use after the effective date is acceptance of the updated Terms.</p>
          </Section>

          <Section title="14. Contact">
            <Table rows={[
              ['Legal queries', 'legal@eboracommerce.com'],
              ['Support', 'support@eboracommerce.com'],
              ['Phone', '+254 799 644 100'],
            ]} />
          </Section>
        </div>

        <div className="mt-6 text-center">
          <Link to="/privacy" className="text-sm text-primary hover:underline">← Privacy Policy</Link>
          <span className="mx-3 text-ink-3">·</span>
          <Link to="/" className="text-sm text-primary hover:underline">Back to store →</Link>
        </div>
      </div>
    </div>
  )
}
