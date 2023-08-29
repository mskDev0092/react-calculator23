import React, { useReducer } from 'react';
import Digit from './Digit.jsx';
import Operand from './Operand.jsx';
import './style.css';

export const calcActions = {
  CHECK: 'check_evaluation',
  CLEAR: 'clear',
  ADD: 'add_num',
  DEL: 'del_num',
  CHOOSE: 'choose_operation',
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD':
  }
};

export default function Calc() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
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

          <Operand id="divide" operation="/" dispatch={dispatch} />

          <Digit id="seven" digit="7" dispatch={dispatch} />
          <Digit id="eight" digit="8" dispatch={dispatch} />
          <Digit id="nine" digit="9" dispatch={dispatch} />
          <Operand id="multiply" operation="*" dispatch={dispatch} />
          <Digit id="four" digit="4" dispatch={dispatch} />
          <Digit id="five" digit="5" dispatch={dispatch} />
          <Digit id="six" digit="6" dispatch={dispatch} />
          <Operand id="subtract" operation="-" dispatch={dispatch} />
          <Digit id="one" digit="1" dispatch={dispatch} />
          <Digit id="two" digit="2" dispatch={dispatch} />
          <Digit id="three" digit="3" dispatch={dispatch} />

          <Operand id="add" operation="+" dispatch={dispatch} />
          <Digit id="zero" digit="0" dispatch={dispatch} />
          <button id="decimal"> .</button>
          <button className="span2" id="equals">
            =
          </button>
        </div>
      </div>
    </>
  );
}
