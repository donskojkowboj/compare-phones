import { PhoneType } from '../../../../stores/types';
import { Button } from '../../../UIComponents/Button';
import { ChevronIcon } from '../../../UIComponents/Icons';
import styles from './PhoneCard.module.scss';

type PhoneCardProps = Pick<PhoneType, 'image' | 'name'>;

export const PhoneCard = ({ name, image }: PhoneCardProps) => {
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
