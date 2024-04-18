import { Metadata } from 'next'
import contentCases from '@/data/contentCases.json';
import TemplateNoAside from '@/components/TemplateNoAside'

const pageTitle = "Uppdrag - SEO, tillgänglighet och semantik - Aha Digital"
const pageDescription = "Aha digital bygger med den senaste tekniken och siktar högt med prestanda, SEO, tillgänglighet och semantik."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/uppdrag',
    images: '/opengraph-image.png',
  }
}

export default function Cases() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article>
          <TemplateNoAside content={contentCases} />
        </article>
      </div>
    </div>
  );
}
