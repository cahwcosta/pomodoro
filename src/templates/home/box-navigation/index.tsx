import { type JSX } from 'react';
import S from './styles.module.scss';
import C from './constants';

export const BoxNavigation = (): JSX.Element => {
  return (
    <div className={S.boxNavigation}>
      <div className={S.content}>
        <div>
          <img className={S.icon} src={C.min.src} alt={C.min.alt} />
        </div>
        <div>
          <img className={S.icon} src={C.max.src} alt={C.max.alt} />
        </div>
        <div>
          <img className={S.icon} src={C.close.src} alt={C.close.alt} />
        </div>
      </div>
    </div>
  );
};
