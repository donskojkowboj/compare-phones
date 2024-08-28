import { makeAutoObservable } from 'mobx';
import { PhoneType } from './types';

class PhoneStore {
  phones: PhoneType[] = [];
  displayedPhones: PhoneType[] = [];
  displayedPhonesCount: number = 3;

  constructor() {
    makeAutoObservable(this);
  }

  setDisplayedPhonesCount = (count: number) => {
    this.displayedPhonesCount = count;
  };
}

export default new PhoneStore();
