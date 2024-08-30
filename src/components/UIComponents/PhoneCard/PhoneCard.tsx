import { PhoneType } from '../../../stores/types';
import { Button } from '../Button';
import { ChevronIcon } from '../Icons';
import styles from './PhoneCard.module.scss';

export const PhoneCard = ({ name, image }: PhoneType) => {
  return (
    <div className={styles.phoneCard}>
      <div className={styles.phoneCard__innerWrapper}>
        <img className={styles.phoneCard__img} src={image} alt={name} />
        <Button additionalClassname={styles.phoneCard__btn}>
          <ChevronIcon />
        </Button>
      </div>
      <span className={styles.phoneCard__name}>{name}</span>
    </div>
  );
};
