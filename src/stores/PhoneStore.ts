import { makeAutoObservable } from 'mobx';
import { PhoneType } from './types';

class PhoneStore {
  phones: PhoneType[] = [];
  displayedPhones: PhoneType[] = [];
  displayedPhonesCount: number = 3;

  constructor() {
    makeAutoObservable(this);
  }

  setPhones = (data: Array<PhoneType>) => {
    for (let i = 0; i < data.length; i++) {
      this.phones.push(data[i]);
    }
  };

  setDisplayedPhonesCount = (count: number) => {
    this.displayedPhonesCount = count;
  };
}

export const phoneStore = new PhoneStore();
