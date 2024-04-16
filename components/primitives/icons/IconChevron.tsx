interface IconProps {
  width?: string
  height?: string
}

const IconChevron: React.FC<IconProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true" focusable="false">
      <path d="M2.16665 0.5L0.874146 1.7925L5.07248 6L0.874146 10.2075L2.16665 11.5L7.66665 6L2.16665 0.5Z" fill="currentColor" />
    </svg>
  );
};


export default IconChevron;
