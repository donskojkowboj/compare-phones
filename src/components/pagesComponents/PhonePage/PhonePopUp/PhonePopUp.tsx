import { RefObject, useRef } from 'react';

import { PopUpItem } from './PopUpItem';
import { phoneStore } from '../../../../stores/PhoneStore';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';

import styles from './PhonePopUp.module.scss';

interface PhonePopUpProps {
  isOpen: boolean;
  onClose?: () => void;
  cardId: number;
  openBtnRef: RefObject<HTMLDivElement>;
}

export const PhonePopUp = ({
  isOpen,
  onClose,
  cardId,
  openBtnRef,
}: PhonePopUpProps) => {
  const { remainingPhones } = phoneStore;

  const popupRef = useRef(null);

  const handleOutsideClick = () => {
    if (!onClose) {
      return;
    }

    onClose();
  };

  useOutsideClick({
    ref: popupRef,
    handler: handleOutsideClick,
    exceptElementRef: openBtnRef,
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={popupRef} className={styles.popup}>
      <input className={styles.popup__search} type="text" placeholder="Поиск" />
      <div className={styles.popup__list}>
        {remainingPhones.map((phone) => {
          return (
            <PopUpItem
              key={phone.id}
              image={phone.image}
              name={phone.name}
              popupItemId={phone.id}
              cardId={cardId}
            />
          );
        })}
      </div>
    </div>
  );
};
