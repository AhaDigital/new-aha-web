import { Metadata } from 'next'
import contentCookies from '@/data/contentCookies.json';
import Template from '@/components/TemplateNoAside';

const pageTitle = "Kontakt - Aha Digital"
const pageDescription = "Aha digital skapar tjänster som fungerar för så många som möjligt redan från början. Jag kan hjälpa er med webbutveckling, UX/UI, analys och eran tillgänglighetsredogörelse."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: "noindex, nofollow",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/kontakt',
    images: '/opengraph-image.png',
  }
}

export default function Cookies() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article>
          <Template content={contentCookies} />
        </article>
      </div>
    </div>
  );
}
