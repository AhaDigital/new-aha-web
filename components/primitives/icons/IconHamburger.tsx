interface IconProps {
  width?: string
  height?: string
}

const IconHamburger: React.FC<IconProps> = ({ width = '20', height = '20' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox={`0 0 ${width} ${height}`} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 5H0V3H20V5ZM20 11H0V9H20V11ZM0 17H20V15H0V17Z" fill="currentColor" />
    </svg>
  );
};


export default IconHamburger;
