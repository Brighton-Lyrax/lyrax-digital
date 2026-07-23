import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'

export default function StartProject() {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head>
        <title>Start a Project | Lyrax Digital</title>
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Start a Project</h1>
        <p className="text-gray-300 mb-10 max-w-2xl">
          Share your challenge, desired outcome, and timeline. We will turn it into a clear delivery plan.
        </p>
        <LeadForm />
      </main>
      <Footer />
    </div>
  )
}
