import React, { FC } from 'react';
import { formatDate } from '../../../../utility/helpers';

import { TextBox } from '../../../shared/TextBox';

export enum CardIcons {
  users = 'users',
  timezone = 'timezone',
  views = 'views',
}

type Props = {
  userCount: number;
  createdAt: string;
  views: number;
};

const CardDetails: FC<Props> = ({ userCount, createdAt, views }) => (
  <>
    <TextBox text={`${userCount} Views`} icon={CardIcons.users} />
    <TextBox text={formatDate(createdAt)} icon={CardIcons.timezone} />
    <TextBox text={views} icon={CardIcons.views} />
  </>
);

export default CardDetails;
