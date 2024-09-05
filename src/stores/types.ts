export type PhoneType = {
  id: number;
  name: string;
  image: string;
  chars: PhoneChars;
};

type PhoneChars = {
  manufacturer: string;
  releaseYear: string;
  screenSize: string;
  country: string;
  memory: string;
  refreshRate: string;
  nfc: boolean;
  esim: boolean;
  inductive: boolean;
  price: string;
};

export type TableRowName =
  | 'manufacturer'
  | 'releaseYear'
  | 'screenSize'
  | 'country'
  | 'memory'
  | 'refreshRate'
  | 'nfc'
  | 'esim'
  | 'inductive'
  | 'price';

export type TableRowType = {
  rowName: TableRowName;
  rowTitle: string;
  rowChars: (string | boolean)[];
};
