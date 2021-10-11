import React, { FC, useEffect, useState } from 'react';

import { getLocations, LocationData } from '../../api';

import style from './Locations.module.css';
import { LocationCard } from './LocationCard';

const Locations: FC = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const fetchData = async (): Promise<void> => {
    try {
      const result = await getLocations();
      setLocations(result);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      {locations.map((l) => (
        <LocationCard
          key={l.id}
          name={l.name}
          userCount={l.userCount}
          dateCreated={l.createdAt}
        />
      ))}
    </div>
  );
};

export default Locations;
