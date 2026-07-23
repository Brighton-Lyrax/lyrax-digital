import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head><title>Terms | Lyrax Digital</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold mb-4">Terms</h1>
        <p className="text-gray-300">By using this site, you agree to standard terms of engagement. Projects are scoped by outcome, with clear ownership and change rules.</p>
      </main>
      <Footer />
    </div>
  )
}
