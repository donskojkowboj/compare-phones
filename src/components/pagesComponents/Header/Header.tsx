import { Container } from '../Container';
import { AccountIcon } from '../../UIComponents/Icons';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <span className={styles.catalogue}>Каталог</span>
          <div className={styles.rightBlock}>
            <a className={styles.comparison}>Сравнение</a>
            <div className={styles.account}>
              <a className={styles.accountText}>Личный кабинет</a>
              <a href="#">
                <AccountIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
