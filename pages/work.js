import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Work() {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head>
        <title>Work | Lyrax Digital</title>
      </Head>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h1>
        <p className="text-gray-300 mb-16 max-w-2xl">
          Examples of systems, portals, and sites built around business outcomes.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: 'Meridian Services', result: 'Client portal with role-aware dashboards and booking flow.' },
            { name: 'Northwind Retail', result: 'WooCommerce storefront with clearer checkout and order ops.' },
            { name: 'Atlas Networks', result: 'Corporate site with SEO baseline and month-one content model.' },
            { name: 'Pillar Co.', result: 'Brand system, social templates, and pitch deck refresh.' },
          ].map((item) => (
            <div key={item.name} className="p-6 rounded border border-white/5">
              <h3 className="text-xl font-semibold mb-2 text-gold-400">{item.name}</h3>
              <p className="text-gray-300">{item.result}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
