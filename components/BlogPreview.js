import Link from 'next/link'

export default function BlogPreview() {
  return (
    <section className="border-t border-white/5 bg-royal-950">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">From the blog</h2>
            <p className="text-gray-300">Notes on systems, automation, and digital product craft.</p>
          </div>
          <Link href="/blog" className="text-gold-400 hover:text-gold-300">View all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/blog/automation-checklist" className="group block p-6 rounded border border-white/5 hover:border-gold-500/40 transition">
            <p className="text-xs text-gold-400 mb-3">Automation</p>
            <h3 className="text-lg font-semibold group-hover:text-gold-400">An accountable automation checklist before you connect tools</h3>
          </Link>
          <Link href="/blog/portal-ownership" className="group block p-6 rounded border border-white/5 hover:border-gold-500/40 transition">
            <p className="text-xs text-gold-400 mb-3">Operations</p>
            <h3 className="text-lg font-semibold group-hover:text-gold-400">Client portal ownership: who owns the data, approvals, and handover?</h3>
          </Link>
          <Link href="/blog/launch-to-retainer" className="group block p-6 rounded border border-white/5 hover:border-gold-500/40 transition">
            <p className="text-xs text-gold-400 mb-3">Growth</p>
            <h3 className="text-lg font-semibold group-hover:text-gold-400">From launch to retainer: a simple post-launch rhythm</h3>
          </Link>
        </div>
      </div>
    </section>
  )
}
