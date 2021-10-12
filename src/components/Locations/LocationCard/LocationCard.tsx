import React, { FC, KeyboardEvent, MouseEvent, useRef, useState } from 'react';

import { Card } from '../../shared/Card';
import { LocationData } from '../../../api';
import { CardDetails } from '../shared/CardDetails';
import EditSvg from '../../../assets/Edit.svg';

import style from './LocationCard.module.css';

export enum CardIcons {
  users = 'users',
  timezone = 'timezone',
  views = 'views',
}

type Props = {
  data: LocationData;
  handleModal: (data: LocationData & { views: number }) => void;
};

const LocationCard: FC<Props> = ({ data, handleModal }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [views, setViews] = useState(0);
  const { name, createdAt, userCount } = data;
  const [showEdit, setShowEdit] = useState(false);

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    setViews(views + 1);
    handleModal({ ...data, views: views + 1 });
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      setViews(views + 1);
      handleModal({ ...data, views: views + 1 });
    }
    if (e.code === 'Escape') {
      elementRef.current?.blur();
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setShowEdit(true)}
      onMouseLeave={() => setShowEdit(false)}
      role="button"
      tabIndex={0}
      ref={elementRef}
      className={style.container}
    >
      {showEdit && (
        <div className={style.edit}>
          <img src={EditSvg} alt="edit" className={style.editSvg} />
        </div>
      )}
      <Card title={name} showHover={showEdit}>
        <CardDetails
          userCount={userCount}
          views={views}
          createdAt={createdAt}
        />
      </Card>
    </div>
  );
};

export default LocationCard;
