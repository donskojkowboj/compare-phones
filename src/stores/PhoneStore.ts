import { makeObservable, observable, action } from 'mobx';

class PhoneStore {
  phones: any[] = observable([]);
  displayedPhones: any[] = observable([]);
  maxDisplay: number = 6;
  minDisplay: number = 2;
  defaultDisplay: number = 3;
  chosenDisplay: number = this.defaultDisplay;

  constructor() {
    makeObservable(this, {
      chosenDisplay: observable,
      displayInitialPhones: action,
      replacePhones: action,
      chooseDisplayNumber: action,
    });
    this.displayInitialPhones();
  }

  displayInitialPhones() {
    this.phones.slice(0, this.defaultDisplay);
  }

  chooseDisplayNumber(number: number) {
    this.displayedPhones.slice(0, this.chosenDisplay);
  }

  replacePhones(id: number) {}
}

export const phoneStore = new PhoneStore();
