import { Metadata } from 'next'
import contentContact from '@/data/contentEnglish.json';
import Template from '@/components/TemplateAside';

const pageTitle = "In english - Aha Digital"
const pageDescription = "Aha Digital creates web services that works for as many users as possible from the beginning. I can help you with your web accessibility, web development and with UX/UI design."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: "index, follow",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/english',
    images: '/opengraph-image.png',
  },
}

export default function AboutAha() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article lang='en'>
          <Template content={contentContact} inEnglish />
        </article>
      </div>
    </div>
  );
}
