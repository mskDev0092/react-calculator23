import React from 'react';
import Buttons from '../Components/buttons';
import OutputScreen from '../Components/outputScreen.jsx';
import Title from '../Components/title.jsx';

import '../style.css';
const Calculator = () => {
  return (
    <>
      <div className="wrap">
        <Title />
        <OutputScreen />
        <Buttons />
      </div>
    </>
  );
};
export default Calculator;
