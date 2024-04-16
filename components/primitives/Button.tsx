import React, { ComponentPropsWithRef, forwardRef } from 'react';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: React.ReactNode;
  classNames?: string;
  hasIcon?: boolean;
}

/** TODO: Create ButtonIcon and remove hasIcon */
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, hasIcon, classNames, ...rest } = props;

  return (
    <button {...rest} ref={ref} className={`${classNames ? `${classNames} button` : 'button'}${hasIcon ? ' has-icon' : ''}`}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
