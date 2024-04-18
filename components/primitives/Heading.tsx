import React from 'react';
import Link from 'next/link';
import IconAnchor from '@/components/primitives/icons/IconAnchor';
import { scrollToElement } from '@/lib/scrollUtils';
interface HeadingProps {
  id?: string;
  renderAs?: string;
  classNames?: string;
  innerHtml: string;
}

const Heading: React.FC<HeadingProps> = ({ id = '', renderAs, classNames, innerHtml, ...rest }) => {
  const heading = renderAs || 'h1';
  const HeadingComponent = heading as keyof JSX.IntrinsicElements;

  const handleTargetFocus = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToElement(id)
  };

  return id ? (
    <HeadingComponent className="heading-container" {...rest}>
      <Link id={id} href={`#${id}`} scroll={false} onClick={handleTargetFocus}>
        <span className={classNames} dangerouslySetInnerHTML={{ __html: innerHtml }} />
        <IconAnchor />
      </Link>
    </HeadingComponent>
  ) : (
    <HeadingComponent className={classNames} {...rest} dangerouslySetInnerHTML={{ __html: innerHtml }} />
  );
};

Heading.displayName = 'Heading';

export default Heading;
