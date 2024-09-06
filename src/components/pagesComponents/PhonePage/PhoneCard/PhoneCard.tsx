import { MouseEvent } from 'react';

import { Button } from '../../../UIComponents/Button';
import { ChevronIcon } from '../../../UIComponents/Icons';

import styles from './PhoneCard.module.scss';

type PhoneCardProps = {
  name: string;
  image: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const PhoneCard = ({ name, image, onClick }: PhoneCardProps) => {
  return (
    <div className={styles.phoneCard}>
      <div className={styles.phoneCard__innerWrapper}>
        <img className={styles.phoneCard__img} src={image} alt={name} />
        <Button onClick={onClick} additionalClassname={styles.phoneCard__btn}>
          <ChevronIcon />
        </Button>
      </div>
      <span className={styles.phoneCard__name}>{name}</span>
    </div>
  );
};
