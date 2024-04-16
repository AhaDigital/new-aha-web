import React from 'react';

interface TextProps {
  classNames?: string
  renderAs?: "span" | "strong" | "i"
  innerHtml?: string
  children?: any
}

const Text: React.FC<TextProps> = (({ renderAs, classNames, innerHtml, children }) => {

  const text = renderAs || 'p';
  const TextComponent = text as keyof JSX.IntrinsicElements

  return innerHtml ? (
    <TextComponent className={`text${classNames ? ` ${classNames}` : ''}`} dangerouslySetInnerHTML={{ __html: innerHtml }} />
  ) : (
    <TextComponent className={`text${classNames ? ` ${classNames}` : ''}`}>{children}</TextComponent>
  );
});

export default Text;
