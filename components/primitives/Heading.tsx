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
      {...(id ? { "id": id } : null)}
      {...(classNames ? { "className": classNames } : null)}
      {...rest}
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
  )
});

Heading.displayName = 'heading';

export default Heading;
