interface IconProps {
  width?: string
  height?: string
}

const IconMobile: React.FC<IconProps> = ({ width = '20', height = '20' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} width="100%" fill="none" aria-hidden="true" focusable="false">
      <g clipPath="url(#clip0_330_263)">
        <path d="M13.3334 0.833313H6.66675C5.28341 0.833313 4.16675 1.94998 4.16675 3.33331V16.6666C4.16675 18.05 5.28341 19.1666 6.66675 19.1666H13.3334C14.7167 19.1666 15.8334 18.05 15.8334 16.6666V3.33331C15.8334 1.94998 14.7167 0.833313 13.3334 0.833313ZM11.6667 17.5H8.33341V16.6666H11.6667V17.5ZM14.3751 15H5.62508V3.33331H14.3751V15Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_330_263">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};


export default IconMobile;
