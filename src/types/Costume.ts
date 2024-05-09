import { COSTUME_PARTS, SKIN_LIST } from '@/contants';

export type CostumePart = (typeof COSTUME_PARTS)[number];

export type Skin = keyof typeof SKIN_LIST;

export type CostumeInfo = {
  index: number;
  name: string;
  source: string;
  part: number;
  gender: number;
  luxury: boolean;
};
