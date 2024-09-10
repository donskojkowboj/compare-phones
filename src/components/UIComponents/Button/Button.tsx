import { HTMLAttributes, ReactNode, RefObject } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  additionalClassname?: string;
  buttonRef?: RefObject<HTMLButtonElement>;
  children: ReactNode;
}

export const Button = ({
  isActive,
  children,
  additionalClassname,
  buttonRef,
  ...rest
}: ButtonProps) => {
  const createClassname = () => {
    return `${additionalClassname} ${isActive ? styles.active : ''}`;
  };

  return (
    <button ref={buttonRef} className={createClassname()} {...rest}>
      {Boolean(children) && <span>{children}</span>}
    </button>
  );
};
