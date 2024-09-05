import { AccountIcon } from '../../UIComponents/Icons';
import { Container } from '../Container';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__wrapper}>
          <span className={styles.header__catalogue}>Каталог</span>
          <div className={styles.header__rightBlock}>
            <a href="/" className={styles.header__comparison}>
              Сравнение
            </a>
            <div className={styles.header__account}>
              <a href="/" className={styles.header__accountText}>
                Личный кабинет
              </a>
              <a href="/">
                <AccountIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
