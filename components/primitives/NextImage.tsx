import React from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string
  width?: number
  height?: number
  alt: string
  dimension?: string | undefined
}

const NextImage: React.FC<ImageProps> = (({ dimension, src, width, height, alt }) => {
  let finalClass = ''
  console.log(dimension)
  switch (dimension) {
    case 'square':
      finalClass += 'next-image next-image--square'
      break;
    case 'wide':
      finalClass += 'next-image next-image--wide'
      break;
    default:
      finalClass = 'next-image';
      break;
  }
  return (
    <div className={finalClass}>
      <Image src={src}
        {...(!width && !height ? { "fill": true } : null)}
        alt={alt} />
      {/* <Image src={src} alt={alt} sizes="100vw"
        width={500}
        height={300}
        style={{
          width: '100%',
          height: 'auto',
        }} priority /> */}
    </div>
  );
});

export default NextImage;
