import React, { FC } from 'react';
import { PulseLoader } from 'react-spinners';

const Spinner: FC = () => (
  <div style={{ marginTop: '200px' }} data-testid="loaderId">
    <PulseLoader color="#00112270" />
  </div>
);

export default Spinner;
