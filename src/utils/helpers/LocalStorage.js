export const getItem = (key) => {
  return localStorage.getItem(key);
};
export const setItem = (key, obj) => {
  return localStorage.setItem(key, obj);
};
export const removeItem = (key) => {
  localStorage.removeItem(key);
};
