import Link from 'next/link'

export default function ServiceCard({ title, description, tags }) {
  return (
    <div className="p-6 rounded border border-white/5 hover:border-gold-500/40 transition">
      <h3 className="text-xl font-semibold mb-3 text-gold-400">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">{tag}</span>
        ))}
      </div>
    </div>
  )
}
