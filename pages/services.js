import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head>
        <title>Services | Lyrax Digital</title>
      </Head>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
        <p className="text-gray-300 mb-16 max-w-2xl">
          Each engagement is scoped around a business or operational outcome.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard title="Web Apps & Client Portals" description="Role-aware dashboards, booking flows, internal tools, and client portals with clear approvals and audit trails." tags={['Dashboards', 'Admin panels', 'Membership platforms']} />
          <ServiceCard title="AI & Business Automation" description="Trigger-based workflows connecting CRM, WhatsApp, email, SMS, and reporting with visible decision ownership." tags={['n8n workflows', 'Lead automation', 'WhatsApp']} />
          <ServiceCard title="Business Websites" description="Information architecture, responsive UI, CMS, and lead paths with clear ownership after launch." tags={['Corporate sites', 'Landing pages', 'SEO']} />
          <ServiceCard title="E-commerce Experiences" description="Catalogue structure, mobile discovery, payments, checkout design, and order workflows." tags={['WooCommerce', 'Payments', 'Checkout']} />
          <ServiceCard title="Brand & Digital Identity" description="Logo refinement, brand systems, social templates, and launch assets." tags={['Logo', 'Pitch decks', 'Templates']} />
          <ServiceCard title="Care & Growth Retainers" description="Updates, hosting support, backups, analytics, and agreed improvements." tags={['Maintenance', 'Analytics', 'Retainers']} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
