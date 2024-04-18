import type { Metadata } from "next";
import content404 from '@/data/content404.json';
import TemplateNoAside from '@/components/TemplateNoAside'

const pageTitle = "404 - Sidan finns inte - Aha Digital"

export const metadata: Metadata = {
  title: pageTitle,
  robots: "noindex, nofollow"
}

export default function NotFound() {
  return (
    <article className="page-content">
      <div className='article-template'>
        <article>
          <TemplateNoAside content={content404} />
        </article>
      </div>
    </article>
  );
}
