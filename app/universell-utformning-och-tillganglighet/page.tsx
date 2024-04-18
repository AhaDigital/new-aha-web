import { Metadata } from 'next'
import contentA11y from '@/data/contentA11y.json';
import Template from '@/components/TemplateAside';

const pageTitle = "Tillgänglighet - Universell utformning, WCAG, webbtillgänglighetsdirektivet - Aha Digital"
const pageDescription = "Aha digital skapar tjänster som fungerar för så många som möjligt redan från början. Jag kan hjälpa er med webbutveckling, UX/UI, analys och eran tillgänglighetsredogörelse."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: "index, follow",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/universell-utformning-och-tillganglighet',
    images: '/opengraph-image.png',
  }
}

export default function AboutAha() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article>
          <Template content={contentA11y} />
        </article>
      </div>
    </div>
  );
}
