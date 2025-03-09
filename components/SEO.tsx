import Head from "next/head"

interface SEOProps {
  title: string
  description: string
  canonicalUrl: string
  ogImage: string
  ogType?: string
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, ogImage, ogType = "website" }) => {
  const fullTitle = `${title} | Savoria Restaurant`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO-friendly meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
    </Head>
  )
}

export default SEO

