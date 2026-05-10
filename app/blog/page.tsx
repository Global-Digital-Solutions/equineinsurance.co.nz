import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Horse Insurance Blog NZ | Equine Insurance Guides | EquineInsurance.co.nz',
  description: 'Horse insurance guides, articles, and news for NZ horse owners. Expert advice on equine insurance, colic cover, racehorse insurance, and more.',
  alternates: { canonical: `${siteConfig.url}/blog/` },
}

export default function BlogPage() {
  return (
    <>
      <div className="bg-brand border-b border-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Horse Insurance Blog & Guides</h1>
          <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
            Expert guides, articles, and news about equine insurance in New Zealand — written for NZ horse owners.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-white border border-gray-200 hover:border-green-200 rounded-2xl p-6 transition-all hover:shadow-md"
              >
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-3">
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.readTime}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
