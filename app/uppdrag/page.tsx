import { Metadata } from 'next'
import contentCases from '@/data/contentCases.json';
import TemplateNoAside from '@/components/TemplateNoAside'

const pageTitle = "Uppdrag - Privat- och offentlig sektor - Aha Digital"
const pageDescription = "Aha digital skapar tjänster som fungerar för så många som möjligt redan från början. Jag kan hjälpa er med webbutveckling, UX/UI, analys och eran tillgänglighetsredogörelse."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: "index, follow",
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
