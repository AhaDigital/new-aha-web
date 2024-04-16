import { Metadata } from 'next'
import contentNetlife from '@/data/contentHermods.json';
import Template from '@/components/TemplateAside';

const pageTitle = "Uppdrag - Hermods elevgränssnitt Novo - Aha Digital"
const pageDescription = "IT-konsult, lead front end-utvecklare, universell utformning och tillgänglighetsredogörelse."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/uppdrag/hermods',
  }
}

export default function Hermods() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article>
          <Template content={contentNetlife} />
        </article>
      </div>
    </div>
  );
}
