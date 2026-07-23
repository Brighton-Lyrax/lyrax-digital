import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block p-6 rounded border border-white/5 hover:border-gold-500/40 transition">
      <p className="text-xs text-gold-400 mb-3">{post.category}</p>
      <h3 className="text-lg font-semibold group-hover:text-gold-400">{post.title}</h3>
      <p className="text-gray-400 text-sm mt-2">{post.excerpt}</p>
    </Link>
  )
}
