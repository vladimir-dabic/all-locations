import React, { FC } from 'react';

import style from './Card.module.css';

const Card: FC<{ title?: string }> = ({ children, title }) => (
  <div className={style.container}>
    {title && <span className={style.title}>{title}</span>}
    {children}
  </div>
);
export default Card;
