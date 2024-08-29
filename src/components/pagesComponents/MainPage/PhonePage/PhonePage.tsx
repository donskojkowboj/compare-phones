import React from 'react';
import { observer } from 'mobx-react-lite';
import { phoneStore } from '../../../../stores/PhoneStore';
import { Container } from '../../Container';
import { PhoneCard } from '../../../UIComponents/PhoneCard';
import { Counter } from '../../../UIComponents/Counter';
import styles from './PhonePage.module.scss';

export const PhonePage = observer(() => {
  const { displayedPhonesCount } = phoneStore;
  const phones = phoneStore.phones;

  const phonesArray = phones
    .map((phone) => {
      return (
        <PhoneCard
          name={phone.name}
          key={phone.id}
          imgSrc={phone.imgSrc}
          alt={phone.alt}
        />
      );
    })
    .slice(0, displayedPhonesCount);

  return (
    <Container>
      <section className={styles.phonePage}>
        <div className={styles.phonePage__topBlock}>
          <h1 className={styles.phonePage__title}>Смартфоны</h1>
          <Counter />
        </div>

        <div className={styles.phonePage__tableHeader}>
          <label className={styles.phonePage__label}>
            <input type="checkbox" />
            Показать различия
          </label>
          {phonesArray}
        </div>
      </section>
    </Container>
  );
});
