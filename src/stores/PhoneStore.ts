import { makeAutoObservable } from 'mobx';
import { PhoneType } from './types';
import phonesData from '../api/data/PhonesData.json';

class PhoneStore {
  phones: PhoneType[] = [];
  displayedPhones: PhoneType[] = [];
  displayedPhonesCount: number = 3;

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
  };

  setDisplayedPhonesCount = (count: number) => {
    this.displayedPhonesCount = count;
    this.setDisplayedPhones(this.phones.slice(0, count));
  };
}

export const phoneStore = new PhoneStore();
