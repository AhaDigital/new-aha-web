import { Metadata } from 'next'

const pageTitle = "Aha Digital"

export const metadata: Metadata = {
  title: pageTitle,
  robots: "noindex, nofollow",
}

export default function AboutAha() {
  return (
    <div className='container-large'>
      <div className='article-template'>
        <article>
          Ej i tjänst
        </article>
      </div>
    </div>
  );
}
