import { HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  isActive?: boolean;
  additionalClassname?: string;
  children?: string | number;
}

export const Button = ({
  icon,
  isActive,
  children,
  additionalClassname,
  ...rest
}: ButtonProps) => {
  const handleIsActive = () => {
    if (isActive) {
      return `${styles.active}`;
    }
    return '';
  };
  const createClassname = () => {
    return `${additionalClassname} ${handleIsActive()}`;
  };

  return (
    <button className={createClassname()} {...rest}>
      {icon}
      {children}
    </button>
  );
};
