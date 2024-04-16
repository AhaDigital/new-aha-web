import Link from "next/link"
import NextImage from "@/components/primitives/NextImage"
import Heading from "@/components/primitives/Heading"

export interface BlurbProps {
  src: string
  alt?: string
  linkTo: string
  linkText: string
  headingLevel: string
  classNames?: string
  text?: string
}

const Blurb: React.FC<BlurbProps> = ({ src, alt, linkTo, linkText, headingLevel, text, classNames }) => {
  return (
    <section className={`blurb${classNames ? ` ${classNames}` : ''}`}>
      {src && <NextImage src={src} alt={alt || ''} />}
      <Link href={linkTo} className="blurb__link">
        <span className="visually-hidden">{linkText}</span>
      </Link>
      <Heading classNames="blurb__heading" renderAs={headingLevel} innerHtml={linkText} />
      {text && <p className="text mt-2">{text}</p>}
    </section>
  );
};


export default Blurb;
