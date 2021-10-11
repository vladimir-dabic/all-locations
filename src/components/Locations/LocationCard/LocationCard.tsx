/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, MouseEventHandler, useState } from 'react';

import { Card } from '../../shared/Card';
import { TextBox } from '../../shared/TextBox';
import { formatDate } from '../../../utility/helpers';

export enum CardIcons {
  users = 'users',
  timezone = 'timezone',
  views = 'views',
}

type Props = {
  name: string;
  userCount: number;
  dateCreated: string;
};

const LocationCard: FC<Props> = ({ name, userCount, dateCreated }) => {
  const [views, setViews] = useState(0);
  const handleClick = (): void => {
    setViews(views + 1);
  };
  return (
    <div onClick={handleClick}>
      <Card title={name}>
        <TextBox text={`${userCount} Views`} icon={CardIcons.users} />
        <TextBox text={formatDate(dateCreated)} icon={CardIcons.timezone} />
        <TextBox text={views} icon={CardIcons.views} />
      </Card>
    </div>
  );
};

export default LocationCard;
