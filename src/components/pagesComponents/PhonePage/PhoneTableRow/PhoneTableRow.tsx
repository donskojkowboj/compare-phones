import { TableRowType } from '../../../../stores/types';

import { SuccessIcon } from '../../../UIComponents/Icons';
import { ErrorIcon } from '../../../UIComponents/Icons';

import styles from './PhoneTableRow.module.scss';

type PhoneTableRowProps = {
  row: TableRowType;
};

export const PhoneTableRow = ({ row }: PhoneTableRowProps) => {
  const displayChar = (char: boolean | string) => {
    if (typeof char === 'boolean') {
      return char ? <SuccessIcon /> : <ErrorIcon />;
    }
    return char;
  };

  return (
    <div className={styles.tableRow}>
      <div className={styles.tableRow__firstColumn}>
        <div className={styles.tableRow__item}>{row.rowTitle}</div>
      </div>

      <ul className={styles.tableRow__list}>
        {row.rowChars.map((char, i) => {
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
