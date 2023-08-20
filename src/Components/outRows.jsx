import React from 'react';
import { useState } from 'react';

const Rows = () => {
  const [num, setNum] = useState('1234');

  const handleChange = (e) => {
    setNum();
  };
  return (
    <div className="outputWrap">
      <div className="prev">1 + 2 =333</div>
      <div className="next">3333</div>
    </div>
  );
};

export default Rows;
