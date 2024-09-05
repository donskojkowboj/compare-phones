import { TableRowType } from '../../../../stores/types';
import { SuccessIcon } from '../../../UIComponents/Icons';
import { ErrorIcon } from '../../../UIComponents/Icons';

import styles from './PhoneTableRow.module.scss';
import commonStyles from '../PhonePage.module.scss';

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
    <div
      className={`${commonStyles.phonePage__tableWrapper} ${styles.tableRow__char}`}
    >
      <div className={commonStyles.phonePage__firstColumn}>
        <div className={styles.tableRow__title}>{row.rowTitle}</div>
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
