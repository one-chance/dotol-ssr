export const decodeJWT = (token: string) => {
  const base64Url = token.split(`.`)[1];
  const base64 = base64Url.replace(/-/g, `+`).replace(/_/g, `/`);
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split(``)
      .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(``),
  );

  return JSON.parse(jsonPayload);
};

export const getAccessToken = () => {
  const token = localStorage.getItem(`accessToken`);

  return !token ? null : token;
};

export const checkAuthed = () => {
  const userInfo = localStorage.getItem('userInfo');

  return !userInfo ? null : JSON.parse(userInfo);
};
