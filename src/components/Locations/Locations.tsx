import React, { FC, useEffect, useState } from 'react';

import { getLocations, LocationData } from '../../api';

import style from './Locations.module.css';
import { LocationCard } from './LocationCard';
import { Modal } from '../shared/Modal';

const Locations: FC = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<LocationData>();

  const fetchData = async (): Promise<void> => {
    try {
      const result = await getLocations();
      setLocations(result);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const handleModal = (data: LocationData): void => {
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
          {currentCard.description}
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
