import React, { FC } from 'react';
import { PulseLoader } from 'react-spinners';

const Spinner: FC = () => (
  <div data-testid="LoaderId">
    <PulseLoader color="#00112270" />
  </div>
);

export default Spinner;
