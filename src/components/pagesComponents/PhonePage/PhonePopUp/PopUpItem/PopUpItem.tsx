import { Button } from '../../../../UIComponents/Button';
import { ReplaceIcon } from '../../../../UIComponents/Icons';
import { phoneStore } from '../../../../../stores/PhoneStore';

import styles from './PopUpItem.module.scss';

type PopUpItemProps = {
  image: string;
  name: string;
  popupItemId: number;
  cardId: number;
};

export const PopUpItem = ({
  image,
  name,
  popupItemId,
  cardId,
}: PopUpItemProps) => {
  const { replacePhones } = phoneStore;

  const handleReplaceItem = () => {
    replacePhones(cardId, popupItemId);
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__wrapper}>
        <Button onClick={handleReplaceItem}>
          <ReplaceIcon />
        </Button>
        <img className={styles.item__img} src={image} alt="" />
      </div>
      <span className={styles.item__name}>{name}</span>
    </div>
  );
};
