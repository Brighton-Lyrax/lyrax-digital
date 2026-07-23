import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head>
        <title>Contact | Lyrax Digital</title>
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
        <p className="text-gray-300 mb-10">
          Tell us about your project, goals, and timeline. We will respond with a clear next step.
        </p>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
