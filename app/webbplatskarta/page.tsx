import { Metadata } from 'next'
import contentSitemap from '@/data/contentSitemap.json';
import Template from '@/components/TemplateNoAside';

const pageTitle = "Webbplatskarta - Aha Digital"
const pageDescription = ""

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: "noindex, nofollow",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/webbplatskarta',
  },
}

export default function AboutAha() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article lang='en'>
          <Template content={contentSitemap} />
        </article>
      </div>
    </div>
  );
}
