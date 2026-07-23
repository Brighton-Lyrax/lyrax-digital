import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { posts } from '../../data/blog'

export default function BlogPost({ post }) {
  return (
    <div className="min-h-screen bg-royal-950 text-white">
      <Head>
        <title>{post.title} | Lyrax Digital</title>
      </Head>
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-gold-400 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
        <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line">{post.content}</div>
      </article>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug)
  return { props: { post } }
}
