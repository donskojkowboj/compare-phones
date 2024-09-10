import { RefObject, useRef } from 'react';

import { Button } from '../../../UIComponents/Button';
import { ReplaceIcon } from '../../../UIComponents/Icons';
import { phoneStore } from '../../../../stores/PhoneStore';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';

import styles from './PhonePopUp.module.scss';

interface PhonePopUpProps {
  isOpen: boolean;
  onClose?: () => void;
  buttonRef: RefObject<HTMLDivElement>;
}

export const PhonePopUp = ({ isOpen, onClose, buttonRef }: PhonePopUpProps) => {
  const { remainingPhones } = phoneStore;

  const popupRef = useRef(null);

  useOutsideClick(
    popupRef,
    () => {
      if (!onClose) {
        return;
      }
      onClose();
    },
    buttonRef,
  );

  if (!isOpen) {
    return null;
  }
  return (
    <div ref={popupRef} className={styles.popup}>
      <input className={styles.popup__search} type="text" placeholder="Поиск" />
      <div className={styles.popup__list}>
        {remainingPhones.map((phone) => {
          return (
            <div className={styles.popup__listItem} key={phone.id}>
              <div className={styles.popup__wrapper}>
                <Button>
                  <ReplaceIcon />
                </Button>
                <img className={styles.popup__img} src={phone.image} alt="" />
              </div>
              <span className={styles.popup__name}>{phone.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
