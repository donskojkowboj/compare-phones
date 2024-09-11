import { HTMLAttributes, ReactNode, RefObject } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  additionalClassname?: string;
  openBtnRef?: RefObject<HTMLButtonElement>;
  children: ReactNode;
}

export const Button = ({
  isActive,
  children,
  additionalClassname,
  openBtnRef,
  ...rest
}: ButtonProps) => {
  const createClassname = () => {
    return `${additionalClassname} ${isActive ? styles.active : ''}`;
  };

  return (
    <button ref={openBtnRef} className={createClassname()} {...rest}>
      {Boolean(children) && <span>{children}</span>}
    </button>
  );
};
