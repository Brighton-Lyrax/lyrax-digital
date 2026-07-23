import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-gold-400">Lyrax Digital</div>
          <p className="text-gray-400 text-sm mt-1">AI Automation & Web Systems</p>
        </div>
        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/work" className="hover:text-white">Work</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
        <div className="text-gray-500 text-sm">© {new Date().getFullYear()} Lyrax Digital</div>
      </div>
    </footer>
  )
}
