import { HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  additionalClassname?: string;
  children: ReactNode;
}

export const Button = ({
  isActive,
  children,
  additionalClassname,
  ...rest
}: ButtonProps) => {
  const createClassname = () => {
    return `${additionalClassname} ${isActive ? styles.active : ''}`;
  };

  return (
    <button className={createClassname()} {...rest}>
      {Boolean(children) && <span>{children}</span>}
    </button>
  );
};
