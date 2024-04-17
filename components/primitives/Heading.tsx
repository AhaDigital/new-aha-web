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
      className='heading-container'

      {...rest}
    >
      {id && <span id={id} tabIndex={-1} className={`heading-position`} />}
      <span className={classNames} dangerouslySetInnerHTML={{ __html: innerHtml }} />
    </HeadingComponent>
  )
});

Heading.displayName = 'heading';

export default Heading;
