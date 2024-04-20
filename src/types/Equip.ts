import { EQUIP_SUBJECTS, EQUIP_PARTS } from '@/contants/normal-equip';

export type EquipSubject = (typeof EQUIP_SUBJECTS)[number] | '종류';

export type EquipPart = (typeof EQUIP_PARTS)[number] | '부위';
