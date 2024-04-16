import { Metadata } from 'next'
import contentCases from '@/data/contentCases.json';
import Content from "@/components/Content";
import Aside from '@/components/Aside';

const pageTitle = "Uppdrag - SEO, tillgänglighet och semantik - Aha Digital"
const pageDescription = "Aha digital bygger med den senaste tekniken och siktar högt med prestanda, SEO, tillgänglighet och semantik."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/uppdrag',
  }
}

export default function Netlife() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article>
          <h1>Netlife</h1>
        </article>
      </div>
    </div>
  );
}
