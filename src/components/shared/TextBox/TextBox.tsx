import React, { FC } from 'react';
import UsersSvg from '../../../assets/Users.svg';
import ViewSvg from '../../../assets/Views.svg';
import TimezoneSvg from '../../../assets/Timezone.svg';
import style from './TextBox.module.css';

export enum CardIcons {
  users = 'users',
  timezone = 'timezone',
  views = 'views',
}

type Props = {
  text: string | number;
  icon?: CardIcons;
};
const lookupSvgIcon = {
  [CardIcons.users]: UsersSvg,
  [CardIcons.timezone]: ViewSvg,
  [CardIcons.views]: TimezoneSvg,
};
const TextBox: FC<Props> = ({ text, icon, children }) => (
  <div className={style.container}>
    {icon && (
      <img className={style.svgImg} src={lookupSvgIcon[icon]} alt={icon} />
    )}
    {children}
    <span className={style.text}>{text}</span>
  </div>
);

export default TextBox;
