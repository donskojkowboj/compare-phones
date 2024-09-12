import { useState, useRef } from 'react';

import { Button } from '../../../UIComponents/Button';
import { ChevronIcon } from '../../../UIComponents/Icons';
import { PhonePopUp } from '../PhonePopUp';
import { PhoneType } from '../../../../stores/types';

import styles from './PhoneCard.module.scss';

type PhoneCardProps = Pick<PhoneType, 'image' | 'name'> & { cardId: number };

export const PhoneCard = ({ image, name, cardId }: PhoneCardProps) => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  const openBtnRef = useRef(null);

  const handlePopupToggle = () => {
    setIsShowPopup((prev) => {
      return !prev;
    });
  };

  return (
    <div className={styles.phoneCard}>
      <div className={styles.phoneCard__innerWrapper}>
        <PhonePopUp
          cardId={cardId}
          isOpen={isShowPopup}
          onClose={handlePopupToggle}
          openBtnRef={openBtnRef}
        />

        <img className={styles.phoneCard__img} src={image} alt={name} />

        <Button
          onClick={handlePopupToggle}
          additionalClassname={styles.phoneCard__btn}
          btnRef={openBtnRef}
        >
          <ChevronIcon />
        </Button>
      </div>
      <span className={styles.phoneCard__name}>{name}</span>
    </div>
  );
};
