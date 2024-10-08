import { makeAutoObservable } from 'mobx';

import { PhoneType, TableRowType } from './types';
import phonesData from '../api/data/PhonesData.json';

class PhoneStore {
  phones: PhoneType[] = [];
  displayedPhones: PhoneType[] = [];
  displayedPhonesCount = 3;
  remainingPhones: PhoneType[] = [];
  tableRows: TableRowType[] = [
    {
      rowName: 'manufacturer',
      rowTitle: 'Производитель',
      rowChars: [],
    },
    {
      rowName: 'releaseYear',
      rowTitle: 'Год релиза',
      rowChars: [],
    },
    {
      rowName: 'screenSize',
      rowTitle: 'Диагональ экрана (дюйм)',
      rowChars: [],
    },
    {
      rowName: 'country',
      rowTitle: 'Страна-производитель',
      rowChars: [],
    },
    {
      rowName: 'memory',
      rowTitle: 'Объем памяти',
      rowChars: [],
    },
    {
      rowName: 'refreshRate',
      rowTitle: 'Частота обновления экрана',
      rowChars: [],
    },
    {
      rowName: 'nfc',
      rowTitle: 'NFC',
      rowChars: [],
    },
    {
      rowName: 'esim',
      rowTitle: 'Поддержка eSIM',
      rowChars: [],
    },
    {
      rowName: 'inductive',
      rowTitle: 'Поддержка беспроводной зарядки',
      rowChars: [],
    },
    {
      rowName: 'price',
      rowTitle: 'Стоимость',
      rowChars: [],
    },
  ];

  constructor() {
    makeAutoObservable(this);
    if (!this.phones.length) {
      this.getPhonesData();
    }
  }

  getPhonesData = () => {
    this.setPhones(phonesData.phonesData);
    this.setDisplayedPhones(this.phones.slice(0, this.displayedPhonesCount));
  };

  setPhones = (data: PhoneType[]) => {
    this.phones = data;
  };

  setDisplayedPhones = (data: PhoneType[]) => {
    this.displayedPhones = data;
    this.updateTableRowsData();
    this.setRemainingPhones(this.phones, this.displayedPhones);
  };

  setDisplayedPhonesCount = (count: number) => {
    this.displayedPhonesCount = count;
    this.setDisplayedPhones(this.phones.slice(0, count));
  };

  setRemainingPhones = (arr1: PhoneType[], arr2: PhoneType[]) => {
    const set = new Set(arr2);
    this.remainingPhones = arr1.filter((el) => !set.has(el));
  };

  updateTableRowsData = () => {
    this.tableRows = this.tableRows.map((tableRow) => {
      const newRow = { ...tableRow };
      newRow.rowChars = this.displayedPhones.map(
        (phone) => phone.chars[tableRow.rowName],
      );
      return newRow;
    });
  };

  replacePhones = (replacedID: number, replacingID: number) => {
    const replacingPhoneIndex = this.phones.findIndex(
      (phone) => phone.id === replacingID,
    );
    const replacedPhoneIndex = this.phones.findIndex(
      (phone) => phone.id === replacedID,
    );

    const replacingPhone = this.phones[replacingPhoneIndex];
    const replacedPhone = this.phones[replacedPhoneIndex];

    this.phones[replacingPhoneIndex] = replacedPhone;
    this.phones[replacedPhoneIndex] = replacingPhone;

    this.setDisplayedPhones(this.phones.slice(0, this.displayedPhonesCount));
  };
}

export const phoneStore = new PhoneStore();
