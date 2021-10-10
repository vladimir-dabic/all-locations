import React, { FC } from 'react';
import './App.css';
import Header from './header/header';

const App: FC = () => (
  <div>
    <Header title="Acme locations" subtitle="All locations" />
  </div>
);

export default App;
