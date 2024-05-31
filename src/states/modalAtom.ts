import { atom } from 'jotai';

export const loginModalAtom = atom(false);

export const modalAtom = atom<{ [key: string]: boolean }>({});
