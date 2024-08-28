import React from 'react';
import styles from './Button.module.scss';
import { ChevronIcon } from '../Icons';

export const Button = () => {
  return (
    <button className={styles.button}>
      <ChevronIcon />
    </button>
  );
};
