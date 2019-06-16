export const getItem = key => {
  return JSON.parse(sessionStorage.getItem(key));
};

export const setItem = (key, value) => {
  return sessionStorage.setItem(key, JSON.stringify(value));
};
