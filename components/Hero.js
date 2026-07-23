import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-royal-800/50 via-royal-950 to-black" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Business systems built for clarity, ownership, and growth
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          Lyrax Digital builds websites, AI automation, and client portals for teams that want dependable systems and clear ownership after launch.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/start-project" className="px-6 py-3 rounded bg-gold-500 text-royal-950 font-semibold">Start a Project</Link>
          <Link href="/services" className="px-6 py-3 rounded border border-white/10 hover:border-white/30">Explore Services</Link>
        </div>
      </div>
    </section>
  )
}
