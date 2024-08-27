import React from 'react';
import styles from './PhoneCard.module.scss';

interface PhoneCardProps {
  img: string;
  name: string;
  manufacturer: string;
  releaseYear: number;
  screenSize: number;
  country: string;
  memory: string;
  refreshRate: string;
  nfc: boolean;
  esim: boolean;
  inductive: boolean;
  price: number;
}

export const PhoneCard: React.FC<PhoneCardProps> = ({
  img,
  name,
  manufacturer,
  releaseYear,
  screenSize,
  country,
  memory,
  refreshRate,
  nfc,
  esim,
  inductive,
  price,
}) => {
  return <></>;
};
