import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-royal-950/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-gold-400">
          Lyrax Digital
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/work" className="hover:text-white">Work</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link href="/start-project" className="px-4 py-2 rounded bg-gold-500 text-royal-950 font-semibold">Start a Project</Link>
        </nav>
      </div>
    </header>
  )
}
