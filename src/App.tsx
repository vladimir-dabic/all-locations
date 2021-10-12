import React, { FC } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Locations } from './components/Locations';

const App: FC = () => (
  <>
    <Header title="Acme locations" subtitle="All locations" />
    <Locations />
  </>
);

export default App;
