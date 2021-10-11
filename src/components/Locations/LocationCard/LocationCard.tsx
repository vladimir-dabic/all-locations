import React, { FC, KeyboardEvent, MouseEvent, useState } from 'react';

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

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    setViews(views + 1);
  };
  const handleKeyPress = (e: KeyboardEvent): void => {
    e.preventDefault();
    if (e.code === 'Space') {
      setViews(views + 1);
    }
  };
  return (
    <div
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <Card title={name}>
        <TextBox text={`${userCount} Views`} icon={CardIcons.users} />
        <TextBox text={formatDate(dateCreated)} icon={CardIcons.timezone} />
        <TextBox text={views} icon={CardIcons.views} />
      </Card>
    </div>
  );
};

export default LocationCard;
