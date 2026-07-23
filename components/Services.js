export default function Services() {
  const services = [
    {
      title: 'Web Apps & Client Portals',
      description: 'Role-aware dashboards, booking flows, internal tools, and client portals built around one source of truth.',
      link: '/services',
      tags: ['Dashboards', 'Admin panels', 'Membership platforms'],
    },
    {
      title: 'AI & Business Automation',
      description: 'Trigger-based workflows connecting CRM, WhatsApp, email, SMS, and reporting with auditable ownership.',
      link: '/services',
      tags: ['n8n workflows', 'Lead automation', 'WhatsApp'],
    },
    {
      title: 'Business Websites',
      description: 'Information architecture, responsive interface, CMS, and lead paths with clear post-launch ownership.',
      link: '/services',
      tags: ['Corporate websites', 'Landing pages', 'SEO'],
    },
    {
      title: 'E-commerce Experiences',
      description: 'Catalogue structure, checkout design, payments, and order workflows staff can operate confidently.',
      link: '/services',
      tags: ['WooCommerce', 'Payments', 'Checkout'],
    },
    {
      title: 'Brand & Digital Identity',
      description: 'Logo refinement, brand systems, social templates, and launch assets for consistent internal use.',
      link: '/services',
      tags: ['Brand systems', 'Pitch decks', 'Templates'],
    },
    {
      title: 'Care & Growth Retainers',
      description: 'Updates, hosting support, backups, analytics, and agreed improvements after launch.',
      link: '/services',
      tags: ['Maintenance', 'Analytics', 'Retainers'],
    },
  ]

  return (
    <section className="border-t border-white/5 bg-royal-900/40">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built around real business work</h2>
        <p className="text-gray-300 mb-14 max-w-2xl">
          From websites to automation, each offering is scoped to the outcome your team needs next.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <a key={service.title} href={service.link} className="group block p-6 rounded border border-white/5 hover:border-gold-500/40 transition">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-400">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
