import { Metadata } from 'next'
import contentServices from '@/data/contentServices.json';
import Template from '@/components/TemplateAside';

const pageTitle = "Tjänster - Tillgänglighet, frontend & design - Aha Digital"
const pageDescription = "Aha digital skapar tjänster som fungerar för så många som möjligt redan från början. Behöver du hjälp med tillgänglighet, analys, webbutveckling eller design?"

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/tjanster',
    images: '/opengraph-image.png',
  }
}

export default function Services() {
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
