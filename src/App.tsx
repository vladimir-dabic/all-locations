import React, { FC } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Locations } from './components/Locations';

const App: FC = () => (
  <div>
    <Header title="Acme locations" subtitle="All locations" />
    <Locations />
  </div>
);

export default App;
