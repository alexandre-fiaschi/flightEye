import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
  if (typeof window === 'undefined') return null;

  const value = localStorage.getItem(key);
  if (value === 'undefined') return defaultValue;

  const initial = JSON.parse(value);
  return initial;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
