import { Button } from '../Button';

import styles from './PhoneCard.module.scss';

type PhoneCardProps = {
  img: string;
  name: string;
};

export const PhoneCard = ({ img, name }: PhoneCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pictureWrapper}>
        <img className={styles.img} src={img} alt="honor" />
        <Button />
      </div>
      <span className={styles.phoneName}>{name}</span>
    </div>
  );
};
