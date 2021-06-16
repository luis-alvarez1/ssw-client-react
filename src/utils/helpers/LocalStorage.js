export const getItem = (key) => {
  const obj = localStorage.getItem(key);
  return obj;
};
export const setItem = (key, obj) => {
  localStorage.setItem(key, obj);
};
export const removeItem = (key) => {
  localStorage.removeItem(key);
};
