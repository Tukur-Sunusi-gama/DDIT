export const Cac = () => (
  <div className="py-24 px-6 max-w-5xl mx-auto">
    <div className="text-center mb-14">
      <h1 className="text-4xl md:text-5xl font-black text-[var(--color-text)] mb-4">
        Start Your Business Today with CAC Registration
      </h1>
      <p className="text-[var(--color-muted)] text-lg max-w-3xl mx-auto">
        We make CAC registration fast, compliant, and stress-free so you can
        focus on building your business.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="card-surface p-8 rounded-3xl">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
          Business Name
        </h2>
        <ul className="space-y-3 text-[var(--color-muted)]">
          <li>Low cost, quick, and easy</li>
          <li>Ideal for startups, side hustles, and small businesses</li>
          <li>Simple process to get you started fast</li>
        </ul>
      </div>

      <div className="card-surface p-8 rounded-3xl">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
          Limited Liability Company (LLC)
        </h2>
        <ul className="space-y-3 text-[var(--color-muted)]">
          <li>Protects your personal assets</li>
          <li>Eligible for tax incentives under the new system</li>
          <li>Easier to attract investors and secure loans</li>
          <li>Higher credibility and business continuity</li>
        </ul>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-10">
      <div className="card-surface rounded-3xl overflow-hidden">
        <img
          src="/images/cac%20card.jpeg"
          alt="CAC registration card"
          className="h-64 w-full object-cover"
        />
      </div>
      <div className="card-surface rounded-3xl overflow-hidden">
        <img
          src="/images/CAC.jpeg"
          alt="CAC certificate"
          className="h-64 w-full object-cover"
        />
      </div>
    </div>

    <div className="card-surface p-8 rounded-3xl mt-10">
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
        Our Advice
      </h2>
      <p className="text-[var(--color-muted)] leading-relaxed">
        Business Name is great for starting small, but if you want protection,
        growth, and long-term success, LLC is the smarter move.
      </p>
    </div>

    <div className="text-center mt-12">
      <p className="text-[var(--color-muted)] text-lg mb-6">
        Contact us today and let us register your dream business with CAC. Get
        your TIN and easily open a corporate bank account.
      </p>
      <a
        href="/contact"
        className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all"
      >
        Contact Us
      </a>
    </div>
  </div>
);
