import { Metadata } from 'next'
import contentServices from '@/data/contentServices.json';
import Template from '@/components/TemplateAside';

const pageTitle = "Tjänster - Tillgänglighet, webbutverkling, UX/UI-design - Aha Digital"
const pageDescription = "Aha digital skapar tjänster som fungerar för så många som möjligt redan från början. Jag kan hjälpa er med webbutveckling, UX/UI, analys och eran tillgänglighetsredogörelse."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: "index, follow",
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
