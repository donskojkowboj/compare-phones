import { observer } from 'mobx-react-lite';

import { Container } from '../Container';
import { Counter } from '../../UIComponents/Counter';
import { PhoneCard } from './PhoneCard';
import { phoneStore } from '../../../stores/PhoneStore';
import { PhoneTableRow } from './PhoneTableRow';

import styles from './PhonePage.module.scss';

export const PhonePage = observer(() => {
  const { displayedPhones, tableRows } = phoneStore;

  return (
    <section className={styles.phonePage}>
      <Container>
        <div className={styles.phonePage__topBlock}>
          <h1 className={styles.phonePage__title}>Смартфоны</h1>
          <Counter />
        </div>

        <div className={styles.phonePage__tableWrapper}>
          <div className={styles.phonePage__firstColumn}>
            <label className={styles.phonePage__label}>
              <input type="checkbox" />
              Показать различия
            </label>
          </div>

          <div className={styles.phonePage__phoneList}>
            {displayedPhones.map((phone) => {
              return (
                <PhoneCard
                  name={phone.name}
                  cardId={phone.id}
                  key={phone.id}
                  image={phone.image}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.phonePage__tableBody}>
          {tableRows.map((row) => {
            return <PhoneTableRow key={row.rowTitle} row={row} />;
          })}
        </div>
      </Container>
    </section>
  );
});
