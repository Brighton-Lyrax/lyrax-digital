import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import BlogPreview from '../components/BlogPreview'

export default function Home() {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head>
        <title>Lyrax Digital — AI Automation & Web Systems</title>
        <meta name="description" content="Business websites, AI automation, client portals, and digital systems for ambitious teams." />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  )
}
