import { atom } from 'jotai';

const getAccessToken = () => {
  const token = localStorage.getItem(`accessToken`);

  return !token ? false : true;
};

export const isloggedinAtom = atom(false);
// export const isloggedinAtom = atom(getAccessToken());
export const showLoginAtom = atom(false);
