import React, { useReducer } from 'react';
import './style.css';

const initialState = {
  num: 0,
};
const reducer = (action, state) => {
  switch (action.type) {
    case 'ADD':
  }
};

export default function Calc() {
  return (
    <>
      <div className="wrap">
        <div className="title">
          <p>Mango Calculator</p>
        </div>

        <div className="display" id="display">
          <div className="outputWrap">
            <div className="prev">1 + 2 =333</div>
            <div className="next">3333</div>
          </div>
        </div>
        <div className="btn-prim">
          <button className="span1" id="clear">
            AC
          </button>
          <button> Del</button>
          <button id="divide"> /</button>
          <button id="seven"> 7</button>
          <button id="eight"> 8</button>
          <button id="nine"> 9</button>
          <button id="multiply"> *</button>
          <button id="four"> 4</button>
          <button id="five"> 5</button>
          <button id="six"> 6</button>
          <button id="subtract"> -</button>
          <button id="one"> 1</button>
          <button id="two"> 2</button>
          <button id="three"> 3</button>
          <button id="add"> +</button>
          <button id="zero"> 0</button>
          <button id="decimal"> .</button>
          <button className="span2" id="equals">
            =
          </button>
        </div>
      </div>
    </>
  );
}
