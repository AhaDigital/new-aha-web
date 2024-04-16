import React, { ComponentPropsWithRef } from 'react';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: any
  classNames?: string
}

const Button: React.FC<ButtonProps> = (props) => {

  const { children, classNames, ...rest } = props as ButtonProps;
  return (
    <button {...rest} className={`${classNames ? `${classNames} button` : 'button'}`}>
      {children}
    </button>
  );
};


export default Button;
