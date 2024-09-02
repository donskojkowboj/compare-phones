import { TableRowType } from '../../../stores/types';

import { SuccessIcon } from '../Icons';
import { ErrorIcon } from '../Icons';

import styles from './PhoneTableRow.module.scss';

export const PhoneTableRow = ({ rowTitle, rowChars }: TableRowType) => {
  const displayChar = (char: boolean | string) => {
    if (typeof char === 'boolean') {
      return char ? <SuccessIcon /> : <ErrorIcon />;
    }
    return char;
  };

  return (
    <div className={styles.tableRow}>
      <div className={styles.tableRow__item}>{rowTitle}</div>
      <ul className={styles.tableRow__list}>
        {rowChars.map((char, i) => {
          return (
            <li className={styles.tableRow__list_item} key={i}>
              {displayChar(char)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
