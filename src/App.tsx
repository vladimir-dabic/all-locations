import React, { FC, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Locations } from './components/Locations';
import { Modal } from './components/shared/Modal';

const App: FC = () => {
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => {
    console.log('close');
    setShowModal(false);
  };
  return (
    <div>
      <Modal title="Modal title" show={showModal} onClose={handleClose}>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
          asperiores vel iste similique ex labore non libero est! Consectetur a
          officia eum magnam quas. Voluptas harum fugiat corrupti accusamus
          magni!
        </div>
      </Modal>
      <Header title="Acme locations" subtitle="All locations" />
      <button type="button" onClick={() => setShowModal(true)}>
        show
      </button>
      <button type="button" onClick={() => setShowModal(false)}>
        hide
      </button>
      <Locations />
    </div>
  );
};

export default App;
