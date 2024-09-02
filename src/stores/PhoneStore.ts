import { makeAutoObservable } from 'mobx';
import { PhoneType, TableRowType } from './types';
import phonesData from '../api/data/PhonesData.json';

class PhoneStore {
  phones: PhoneType[] = [];
  displayedPhones: PhoneType[] = [];
  displayedPhonesCount: number = 3;
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
    this.setTableRows();
  };

  setPhones = (data: PhoneType[]) => {
    this.phones = data;
  };

  setDisplayedPhones = (data: PhoneType[]) => {
    this.displayedPhones = data;
  };

  setDisplayedPhonesCount = (count: number) => {
    this.displayedPhonesCount = count;
    this.setDisplayedPhones(this.phones.slice(0, count));
    this.setTableRows();
  };

  setTableRows = () => {
    this.tableRows[0].rowChars = this.displayedPhones.map(
      (phone) => phone.chars.manufacturer,
    );
    this.tableRows[1].rowChars = this.displayedPhones.map(
      (phone) => phone.chars.releaseYear,
    );
    this.tableRows[2].rowChars = this.displayedPhones.map(
      (phone) => phone.chars.screenSize,
    );
    this.tableRows[3].rowChars = this.displayedPhones.map(
      (phone) => phone.chars.country,
    );
    this.tableRows[4].rowChars = this.displayedPhones.map(
      (phone) => phone.chars.memory,
    );
    this.tableRows[5].rowChars = this.displayedPhones.map(
      (phone) => phone.chars.refreshRate,
    );
    this.tableRows[6].rowChars = this.displayedPhones.map(
      (phone) => phone.chars.nfc,
    );
    this.tableRows[7].rowChars = this.displayedPhones.map(
      (phone) => phone.chars.esim,
    );
    this.tableRows[8].rowChars = this.displayedPhones.map(
      (phone) => phone.chars.inductive,
    );
    this.tableRows[9].rowChars = this.displayedPhones.map(
      (phone) => phone.chars.price,
    );
  };
}

export const phoneStore = new PhoneStore();
