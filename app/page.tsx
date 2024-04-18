import type { Metadata } from "next";
import NextImage from "@/components/primitives/NextImage";
import contentStart from '@/data/contentStart.json';
import Content from "@/components/Content";

const pageTitle = "Tillgänglighet, frontendutveckling och design - Aha Digital"
const pageDescription = "Aha digital skapar tjänster som fungerar för så många som möjligt redan från början. Kan hjälpa till med eran tillgänglighetsredogörelse, webbutveckling och UX/UI-design."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://ahadigital.se/',
    images: '/opengraph-image.png',
  }
}

export default function Home() {
  return (
    <article className="page-content">
      <section className="container">
        <NextImage src="/digitala-tjanster-for-alla.svg" alt="Digitala tjänster för alla" />
      </section>
      {
        contentStart.map((props) => <Content key={props.id} {...props} />)
      }
    </article>
  );
}
