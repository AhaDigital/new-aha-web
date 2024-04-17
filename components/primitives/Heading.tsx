import React, { forwardRef } from 'react';

interface HeadingProps {
  id?: string
  renderAs?: string
  classNames?: string
  innerHtml: string
}
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { id, renderAs, classNames, innerHtml, ...rest } = props;

  const heading = renderAs || 'h1';
  const HeadingComponent = heading as keyof JSX.IntrinsicElements

  return (
    <HeadingComponent
      className={`heading-container ${classNames}`}
      id={id}
      {...rest}
      tabIndex={-1}
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
  )
});

Heading.displayName = 'heading';

export default Heading;
