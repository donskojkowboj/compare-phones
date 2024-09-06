import { Button } from '../../../UIComponents/Button';
import { ReplaceIcon } from '../../../UIComponents/Icons';
import { phoneStore } from '../../../../stores/PhoneStore';

import styles from './PhonePopUp.module.scss';

export const PhonePopUp = () => {
  const { remainingPhones } = phoneStore;

  return (
    <div className={styles.popup}>
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
