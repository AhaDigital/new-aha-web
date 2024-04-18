import { Metadata } from 'next'
import contentServices from '@/data/contentAboutAha.json';
import Template from '@/components/TemplateAside';

const pageTitle = "Om Aha - Tjänster som fungerar - Aha Digital"
const pageDescription = "Aha digital skapar tjänster som fungerar för så många som möjligt redan från början. Jag kan hjälpa dig med tillgänglighetsredogörelse, webbutveckling och UX/UI"

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: "index, follow",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/om-aha',
    images: '/opengraph-image.png',
  }
}

export default function AboutAha() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article>
          <Template content={contentServices} />
        </article>
      </div>
    </div>
  );
}
