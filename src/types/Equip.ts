import { EQUIP_SUBJECTS, EQUIP_PARTS } from '@/contants/normal-equip';

export type EquipSubject = (typeof EQUIP_SUBJECTS)[number];
export type EquipPart = (typeof EQUIP_PARTS)[number];

export type EquipInfo = {
  index: number;
  name: string;
  subject: string;
  part: string;
  make: boolean;
  reforge: boolean;
  hone: boolean;
};

export type MakeData = {
  index: number;
  book: string;
  origin: string;
  equip: string;
  material: string;
  money: string;
};

export type ReforgeData = {
  index: number;
  origin: string;
  equip: string;
  material: string;
  money: string;
  probability: string;
};

export type HoneData = {
  index: number;
  subject: string;
  part: string;
  origin: string;
  equip: string;
  max: number;
  option1: string;
  option2: string;
  option20: string;
  option40: string;
  option80: string;
};
