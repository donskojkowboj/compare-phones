import { observer } from 'mobx-react-lite';
import { Container } from '../../Container';
import styles from './PhonePage.module.scss';

export const PhonePage = () => {
  return (
    <Container>
      <section className={styles.phonePage}>
        <div className={styles.topBlock}>
          <h1 className={styles.title}>Смартфоны</h1>

          <div className={styles.chooseNumber}>
            <span>Отобразить товары:</span>
            <ul className={styles.pages}>
              <li>
                <a>2</a>
              </li>
              <li className={styles.active}>
                <a>3</a>
              </li>
              <li>
                <a>4</a>
              </li>
              <li>
                <a>5</a>
              </li>
              <li>
                <a>6</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
};
