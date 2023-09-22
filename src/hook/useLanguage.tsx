import { useEffect, useState } from 'react';

export const useLanguage = () => {
  const [state, setState] = useState('PL');

  useEffect(() => {
    const item = localStorage.getItem('lang');
    item ? setState(JSON.parse(item)) : setValue('PL');
  }, []);

  const setValue = (lang: string) => {
    setState(lang);
    window.localStorage.setItem('lang', JSON.stringify(lang));
  };

  return [state, setValue] as const;
};
