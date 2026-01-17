import { atom } from 'jotai';

export const searchQueryAtom = atom<string>('');

export const isSearchActiveAtom = atom((get) => get(searchQueryAtom).trim().length > 0);
