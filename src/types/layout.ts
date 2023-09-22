import { ReactNode } from 'react';

export type LayoutProps = {
  navbar: {
    title: string;
    link: string;
  }[];
  children: ReactNode;
  onChangeLanguage: Function;
};
