import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head><title>Privacy | Lyrax Digital</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold mb-4">Privacy</h1>
        <p className="text-gray-300">We collect contact information only for project conversations. We do not sell or share data with third parties.</p>
      </main>
      <Footer />
    </div>
  )
}
