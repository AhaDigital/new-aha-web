import { Metadata } from 'next'
import contentContact from '@/data/contentContact.json';
import Template from '@/components/TemplateNoAside';

const pageTitle = "Kontakt - Aha Digital"
const pageDescription = "Aha digital skapar tjänster som fungerar för så många som möjligt redan från början. Jag kan hjälpa er med webbutveckling, UX/UI, analys och eran tillgänglighetsredogörelse."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: "index, follow",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/kontakt',
    images: '/opengraph-image.png',
  }
}

export default function AboutAha() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article>
          <Template content={contentContact} />
        </article>
      </div>
    </div>
  );
}
