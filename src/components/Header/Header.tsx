import React, { FC } from 'react';
import style from './Header.module.css';

type Props = {
  title: string;
  subtitle: string;
};
const Header: FC<Props> = ({ title, subtitle }) => (
  <div className={style.container}>
    <span className={style.subtitle}>{subtitle}</span>
    <span className={style.title}>{title}</span>
  </div>
);

export default Header;
