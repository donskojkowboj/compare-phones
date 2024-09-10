import { useState, useRef } from 'react';

import { Button } from '../../../UIComponents/Button';
import { ChevronIcon } from '../../../UIComponents/Icons';
import { PhonePopUp } from '../PhonePopUp';
import { PhoneType } from '../../../../stores/types';

import styles from './PhoneCard.module.scss';

type PhoneCardProps = Pick<PhoneType, 'image' | 'name'>;

export const PhoneCard = ({ image, name }: PhoneCardProps) => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  const buttonRef = useRef(null);

  const handlePopupToggle = () => {
    setIsShowPopup((prev) => {
      return !prev;
    });
  };

  return (
    <div className={styles.phoneCard}>
      <div className={styles.phoneCard__innerWrapper}>
        {
          <PhonePopUp
            isOpen={isShowPopup}
            onClose={handlePopupToggle}
            buttonRef={buttonRef}
          />
        }

        <img className={styles.phoneCard__img} src={image} alt={name} />
        <Button
          onClick={handlePopupToggle}
          additionalClassname={styles.phoneCard__btn}
          buttonRef={buttonRef}
        >
          <ChevronIcon />
        </Button>
      </div>
      <span className={styles.phoneCard__name}>{name}</span>
    </div>
  );
};
