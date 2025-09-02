import { type JSX } from 'react';
import S from './styles.module.scss';
import { BoxNavigation } from './box-navigation';
import { Header } from './header';

export const HomeTemplate = (): JSX.Element => {
  return (
    <div className={S.home}>
      <div className={S.content}>
        <BoxNavigation />
        <Header />
      </div>
    </div>
  );
};
