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
                <button>2</button>
              </li>
              <li className={styles.active}>
                <button>3</button>
              </li>
              <li>
                <button>4</button>
              </li>
              <li>
                <button>5</button>
              </li>
              <li>
                <button>6</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
};
