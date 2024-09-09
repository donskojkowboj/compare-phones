import { Button } from '../../../UIComponents/Button';
import { ChevronIcon } from '../../../UIComponents/Icons';
import { PhonePopUp } from '../PhonePopUp';
import { PhoneType } from '../../../../stores/types';

import styles from './PhoneCard.module.scss';

type PhoneCardProps = Pick<PhoneType, 'image' | 'name'> & {
  isActive: boolean;
  onSelectCard: (name: string) => void;
};

export const PhoneCard = ({
  image,
  name,
  isActive,
  onSelectCard,
}: PhoneCardProps) => {
  const handleDisplayPhones = () => {
    onSelectCard(name);
  };

  return (
    <div className={styles.phoneCard}>
      <div className={styles.phoneCard__innerWrapper}>
        {isActive && <PhonePopUp />}

        <img className={styles.phoneCard__img} src={image} alt={name} />
        <Button
          onClick={handleDisplayPhones}
          additionalClassname={styles.phoneCard__btn}
        >
          <ChevronIcon />
        </Button>
      </div>
      <span className={styles.phoneCard__name}>{name}</span>
    </div>
  );
};
