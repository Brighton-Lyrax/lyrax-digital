import Link from 'next/link'

export default function WorkPreview() {
  const projects = [
    {
      title: 'Yvvyybot101',
      description: 'Standalone Telegram assistant with OpenRouter chat, access control, and session logging.',
      link: '/work#yvvyybot101',
      tags: ['Telegram', 'AI', 'Automation'],
    },
    {
      title: 'Browser Agent',
      description: 'FastAPI backend with browser automation, checkout/webhook flow, and revenue reporting.',
      link: '/work#browser-agent',
      tags: ['FastAPI', 'Playwright', 'Revenue'],
    },
    {
      title: 'Lyraxc',
      description: 'Experimental local-inference scaffolding for agent workflows on CPU hardware.',
      link: '/work#lyraxc',
      tags: ['Local AI', 'Tools', 'Research'],
    },
  ]

  return (
    <section className="border-t border-white/5 bg-royal-900/30">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Selected work</h2>
            <p className="text-gray-300">A few systems we’ve shipped or currently operate.</p>
          </div>
          <Link href="/work" className="text-gold-400 hover:text-gold-300">View all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.title} href={project.link} className="group block p-6 rounded border border-white/5 hover:border-gold-500/40 transition">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
