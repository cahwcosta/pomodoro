import { type JSX } from 'react';
import S from './styles.module.scss';
import C from './constants';

export const Header = (): JSX.Element => {
  return (
    <div className={S.header}>
      <div className={S.content}>
        <p className={S.weekDay}>Segunda-feira</p>
        <p className={S.day}>10 de agosto de 2025</p>
        <h1 className={S.title}>{C.title}</h1>
      </div>
    </div>
  );
};
