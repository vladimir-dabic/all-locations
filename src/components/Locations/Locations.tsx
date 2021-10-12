import React, { FC, useEffect, useState } from 'react';

import { getLocations, LocationData } from '../../api';

import style from './Locations.module.css';
import { LocationCard } from './LocationCard';
import { Modal } from '../shared/Modal';
import { CardDetails } from './shared/CardDetails';

const Locations: FC = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<
    LocationData & { views: number }
  >();

  const fetchData = async (): Promise<void> => {
    try {
      const result = await getLocations();
      setLocations(result);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const handleModal = (data: LocationData & { views: number }): void => {
    setShowModal(true);
    setCurrentCard(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {currentCard && (
        <Modal
          title={currentCard.name}
          show={showModal}
          onClose={() => setShowModal(false)}
        >
          <CardDetails
            userCount={currentCard.userCount}
            views={currentCard.views}
            createdAt={currentCard.createdAt}
          />
          <div className={style.description}>
            <span className={style.title}>Description</span>
            <span className={style.content}>{currentCard.description}</span>
          </div>
        </Modal>
      )}
      <div className={style.container}>
        {locations.map((locationsData) => (
          <LocationCard
            data={locationsData}
            handleModal={handleModal}
            key={locationsData.id}
          />
        ))}
      </div>
    </>
  );
};

export default Locations;
