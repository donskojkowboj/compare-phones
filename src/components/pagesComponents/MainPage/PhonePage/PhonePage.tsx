import React from 'react';
import { observer } from 'mobx-react-lite';
import PhoneStore from '../../../../stores/PhoneStore';

import { Container } from '../../Container';
import { PhoneCard } from '../../../UIComponents/PhoneCard';

import honor from '../../../../assets/images/honor-magic-v2.png';
import huawei from '../../../../assets/images/huawei-pura70-ultra-16.png';
import iphone from '../../../../assets/images/iphone-15-pro-max.png';
import oppo from '../../../../assets/images/oppo-find-n3-16.png';
import samsung from '../../../../assets/images/samsung-galaxy-z-fold6.png';
import xiaomi from '../../../../assets/images/xiaomi-14-ultra-16.png';

import styles from './PhonePage.module.scss';

export const PhonePage = observer(() => {
  const phoneArray = [
    <PhoneCard name="Honor Magic V2" key={1} img={honor} />,
    <PhoneCard name="Huawei Pura 70 Ultra 16" key={2} img={huawei} />,
    <PhoneCard name="iPhone 15 Pro Max" key={3} img={iphone} />,
    <PhoneCard name="Oppo Find N3 16" key={4} img={oppo} />,
    <PhoneCard name="Samsung Galaxy Z Fold 6" key={5} img={samsung} />,
    <PhoneCard name="Xiaomi 14 Ultra 16" key={6} img={xiaomi} />,
  ];

  const possibleItemsCount = [2, 3, 4, 5, 6];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText: number = Number(e.currentTarget.textContent);
    PhoneStore.setDisplayedPhonesCount(buttonText);
  };

  return (
    <Container>
      <section className={styles.phonePage}>
        <div className={styles.topBlock}>
          <h1 className={styles.title}>Смартфоны</h1>

          <div className={styles.chooseNumber}>
            <span className={styles.showGoods}>Отобразить товары:</span>
            <ul className={styles.pages}>
              {possibleItemsCount.map((count) => {
                return (
                  <li
                    className={
                      PhoneStore.displayedPhonesCount === count
                        ? styles.active
                        : undefined
                    }
                    key={count}
                  >
                    <button
                      className={styles.count}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                        handleClick(e)
                      }
                    >
                      {count}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.tableHeader}>
          {phoneArray.slice(0, PhoneStore.displayedPhonesCount)}
        </div>

        <div className={styles.showDifferences}>
          <label className={styles.label}>
            <input type="checkbox" />
            Показать различия
          </label>
        </div>
      </section>
    </Container>
  );
});
