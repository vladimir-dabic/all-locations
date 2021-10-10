import React, { FC, useEffect, useState } from 'react';
import { getLocations, LocationData } from '../../api';
import { Card } from '../shared/Card';
import style from './Locations.module.css';

const Locations: FC = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const fetchData = async (): Promise<void> => {
    try {
      const result = await getLocations();
      setLocations(result);
      console.log({ result });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    console.log('hoj');
  }, []);

  return (
    <div className={style.container}>
      {locations.map((l) => (
        <Card title={l.name}>
          <div>hoj</div>
        </Card>
      ))}
    </div>
  );
};

export default Locations;
