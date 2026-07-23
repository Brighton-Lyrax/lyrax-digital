import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import BlogPreview from '../components/BlogPreview'
import WorkPreview from '../components/WorkPreview'

export default function Home() {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head>
        <title>Lyrax Digital — AI Automation & Web Systems</title>
        <meta name="description" content="Autonomous agents, browser automation, and web systems for teams that want real ownership after launch." />
      </Head>
      <Header />
      <main>
        <Hero />
        <WorkPreview />
        <Services />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  )
}
