import { Metadata } from 'next'
import contentA11y from '@/data/contentA11y.json';
import Template from '@/components/TemplateAside';

const pageTitle = "Tillgänglighet - universell utformning & wcag - Aha Digital"
const pageDescription = "Jag strävar efter att utbilda och själv utveckla enligt europeisk standard som i sin tur bygger på WCAG 2.1 och WCAG 2.2"

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/universell-utformning-och-tillganglighet',
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
