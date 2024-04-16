import { Metadata } from 'next'
import contentServices from '@/data/contentAboutAha.json';
import Template from '@/components/TemplateAside';

const pageTitle = "Om Aha - Specialist inom webbtillgänglighet - Aha Digital"
const pageDescription = "Specialist inom digital tillgänglighet, expert inom wcag, universell utforming och frontend-utveckling."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/tjanster',
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
