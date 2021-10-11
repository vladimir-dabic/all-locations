import React, { FC, KeyboardEvent, MouseEvent, useRef, useState } from 'react';
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
  const elementRef = useRef<HTMLDivElement>(null);
  const [views, setViews] = useState(0);

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    setViews(views + 1);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      setViews(views + 1);
    }
    if (e.code === 'Escape') {
      elementRef.current?.blur();
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      ref={elementRef}
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
