import React, { FC } from 'react';
import header from './header.module.css';

type Props = {
  title: string;
  subtitle: string;
};
const Header: FC<Props> = ({ title, subtitle }) => (
  <div className={header.container}>
    <span className={header.subtitle}>{subtitle}</span>
    <span className={header.title}>{title}</span>
  </div>
);

export default Header;
