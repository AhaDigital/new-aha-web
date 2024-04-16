interface IconProps {
  width?: string
  height?: string
}

const IconClose: React.FC<IconProps> = ({ width = '20', height = '20' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} width="100%" fill="none" aria-hidden="true" focusable="false">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.0001 12.4143L2.20718 21.2072L0.792969 19.793L9.58588 11.0001L0.792999 2.20718L2.20721 0.792969L11.0001 9.58585L19.793 0.792969L21.2072 2.20718L12.4143 11.0001L21.2072 19.793L19.793 21.2072L11.0001 12.4143Z" fill="currentColor" />
    </svg>
  );
};


export default IconClose;
