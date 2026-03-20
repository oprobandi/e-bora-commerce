const steps = [
  { n: '1', text: 'Add items to cart' },
  { n: '2', text: 'Choose M-Pesa at checkout' },
  { n: '3', text: 'Enter your PIN' },
  { n: '4', text: 'Order confirmed!' },
]

const features = [
  { icon: 'fas fa-bolt',               text: 'Instant confirmation to your phone' },
  { icon: 'fas fa-lock',               text: 'End-to-end encrypted transaction' },
  { icon: 'fas fa-mobile-screen-button', text: 'Works on any Safaricom line' },
  { icon: 'fas fa-building-columns',   text: 'Also: Equity, KCB, Fuliza, PesaPal' },
]

export default function MpesaSection() {
  return (
    <section className="bg-brand-green py-14 px-4 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-[-40%] right-[-15%] w-[480px] h-[480px] rounded-full bg-white/[0.04] pointer-events-none" />

      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-14 relative z-10">

        {/* ── COPY ── */}
        <div className="flex-1 text-white">
          <div className="text-[11px] font-bold tracking-[2px] uppercase opacity-60 mb-2.5">
            Kenya's Favourite Payment
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.08] mb-4">
            Pay Seamlessly<br />with M-Pesa
          </h2>
          <p className="text-[15px] opacity-80 leading-relaxed max-w-md mb-8">
            Shop from anywhere in Kenya and pay instantly. No bank account needed —
            just your Safaricom number and PIN.
          </p>

          {/* Steps */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-0">
            {steps.map((step, i) => (
              <div key={step.n} className="flex sm:flex-col items-center gap-3 sm:gap-2">
                <div className="flex items-center gap-3 sm:flex-col sm:items-center">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-display font-extrabold text-sm text-white flex-shrink-0">
                    {step.n}
                  </div>
                  <div className="text-[12.5px] opacity-85 leading-snug sm:text-center max-w-[80px]">
                    {step.text}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <i className="fas fa-chevron-right opacity-30 text-sm sm:hidden" />
                )}
                {i < steps.length - 1 && (
                  <i className="fas fa-chevron-right opacity-30 text-sm hidden sm:block sm:mx-3 sm:mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── VISUAL ── */}
        <div className="flex flex-col sm:flex-row lg:flex-row items-start gap-4 w-full lg:w-auto">
          {/* Phone card */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-sm rounded-2xl p-5 text-white text-center min-w-[152px] w-full sm:w-auto">
            <div className="font-display font-black text-[18px] mb-0.5">M-PESA</div>
            <div className="text-[11px] opacity-60 mb-3">Lipa Na M-Pesa · Paybill</div>
            <i className="fas fa-mobile-screen-button text-4xl mb-2 block" />
            <div className="font-display font-extrabold text-2xl">KSh 18,999</div>
            <div className="text-xs opacity-70 mt-1">Transaction Complete ✓</div>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-2.5 w-full sm:w-auto">
            {features.map(f => (
              <div
                key={f.text}
                className="flex items-center gap-3 bg-white/[0.12] border border-white/[0.16] rounded-xl px-4 py-3 text-[13px] font-medium text-white"
              >
                <i className={`${f.icon} text-[15px] flex-shrink-0`} />
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
