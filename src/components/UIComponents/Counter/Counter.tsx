import { MouseEvent } from 'react';

import { Button } from '../Button';
import { phoneStore } from '../../../stores/PhoneStore';

import styles from './Counter.module.scss';

export const Counter = () => {
  const { setDisplayedPhonesCount, displayedPhonesCount } = phoneStore;

  const possibleItemsCount = [2, 3, 4, 5, 6];

  const handleCounterClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!e.currentTarget?.textContent) {
      return;
    }
    setDisplayedPhonesCount(Number(e.currentTarget.textContent));
  };

  return (
    <div className={styles.itemsCount}>
      <span className={styles.itemsCount__text}>Отобразить товары:</span>
      <ul className={styles.itemsCount__list}>
        {possibleItemsCount.map((count) => {
          return (
            <li key={count}>
              <Button
                additionalClassname={styles.itemsCount__count}
                isActive={displayedPhonesCount === count}
                onClick={handleCounterClick}
              >
                {count}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
