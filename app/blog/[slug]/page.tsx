import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { blogPosts, getBlogBySlug } from '@/data/blog-posts'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}/` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${slug}/`,
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">{line.replace('## ', '')}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{line.replace('### ', '')}</h3>)
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].replace('- ', ''))
        i++
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-1 my-4 text-gray-600">
          {items.map((item, j) => <li key={j}>{item.replace(/\*\*(.*?)\*\*/g, '$1')}</li>)}
        </ul>
      )
      continue
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      const text = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      elements.push(<p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: text }} />)
    }
    i++
  }
  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'EquineInsurance.co.nz',
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${slug}/`,
    },
    url: `${siteConfig.url}/blog/${slug}/`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: siteConfig.url + '/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteConfig.url}/blog/${slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-brand border-b border-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog/" className="hover:text-white">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{post.title}</span>
          </nav>
          <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">{post.title}</h1>
          <p className="text-green-100 text-lg mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-green-300">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              {renderContent(post.content)}

              <div className="mt-10 bg-green-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Need Horse Insurance?</h3>
                <p className="text-gray-600 mb-4">Connect with a licensed NZ equine insurance broker for free — no obligation, no cost.</p>
                <Link href="/contact/" className="inline-block bg-brand hover:bg-brand-light text-white font-bold px-6 py-3 rounded-xl transition-colors">
                  Get Quote →
                </Link>
              </div>

              {/* Related Posts */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {relatedPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}/`} className="group border border-gray-200 hover:border-green-200 rounded-xl p-4 transition-all hover:shadow-sm">
                      <span className="text-xs text-green-600 font-bold uppercase">{p.category}</span>
                      <h4 className="text-sm font-bold text-gray-900 mt-1 group-hover:text-green-700 transition-colors line-clamp-2">{p.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <QuoteForm compact />
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Browse by Horse Type</h3>
                <ul className="space-y-1.5">
                  {['sport-horses', 'thoroughbreds', 'breeding', 'leisure'].map((t) => (
                    <li key={t}>
                      <Link href={`/horses/${t}/`} className="text-green-600 hover:text-green-700 text-sm capitalize transition-colors">
                        {t.replace(/-/g, ' ')} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
