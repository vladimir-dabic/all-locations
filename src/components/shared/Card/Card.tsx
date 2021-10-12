import React, { FC } from 'react';
import cx from 'classnames';

import style from './Card.module.css';

type Props = { title?: string; showHover?: boolean };

const Card: FC<Props> = ({ children, title, showHover = false }) => (
  <div className={cx(style.container, { [style.hover]: showHover })}>
    {title && <span className={style.title}>{title}</span>}
    {children}
  </div>
);
export default Card;
