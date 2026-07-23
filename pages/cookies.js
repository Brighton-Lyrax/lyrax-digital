import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Cookies() {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head><title>Cookies | Lyrax Digital</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold mb-4">Cookies</h1>
        <p className="text-gray-300">This site uses minimal cookies for site functionality and analytics preference only.</p>
      </main>
      <Footer />
    </div>
  )
}
