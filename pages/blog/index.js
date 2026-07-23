import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogCard from '../../components/BlogCard'
import { posts } from '../../data/blog'

export default function Blog() {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head>
        <title>Blog | Lyrax Digital</title>
      </Head>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-gray-300 mb-16 max-w-2xl">
          Notes on building systems, automation, and digital product craft.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
