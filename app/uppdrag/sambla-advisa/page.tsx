import { Metadata } from 'next'
import contentSamblaAdvisa from '@/data/contentSamblaAdvisa.json';
import Template from '@/components/TemplateNoAside';

const pageTitle = "Uppdrag - Sambla och Advisa - Aha Digital"
const pageDescription = "Prestanda, semantik och WCAG åt Sambla och Advisa"

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: "index, follow",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/uppdrag/sambla-advisa',
    images: '/opengraph-image.png',
  }
}

export default function Netlife() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article>
          <Template content={contentSamblaAdvisa} />
        </article>
      </div>
    </div>
  );
}
