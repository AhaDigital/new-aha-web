import { Metadata } from 'next'
import contentFyndiq from '@/data/contentFyndiq.json';
import Template from '@/components/TemplateNoAside';

const pageTitle = "Uppdrag - Fyndiq - Aha Digital"
const pageDescription = "Tillgänglighetsanalys"

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/uppdrag/fyndiq',
  }
}

export default function Netlife() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article>
          <Template content={contentFyndiq} />
        </article>
      </div>
    </div>
  );
}
