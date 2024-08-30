import { MouseEvent } from 'react';
import { phoneStore } from '../../../stores/PhoneStore';
import { Button } from '../Button';
import styles from './Counter.module.scss';

export const Counter = () => {
  const possibleItemsCount = [2, 3, 4, 5, 6];
  const { setDisplayedPhonesCount, displayedPhonesCount } = phoneStore;

  const handleCounterClick = (e: MouseEvent<HTMLButtonElement>) => {
    const buttonText: number = Number(e.currentTarget.textContent);
    setDisplayedPhonesCount(buttonText);
  };

  const setActiveButton = (count: number) => {
    return displayedPhonesCount === count;
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
                isActive={setActiveButton(count)}
                onClick={(e) => handleCounterClick(e)}
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
