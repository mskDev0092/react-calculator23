import { calcActions } from './Calc.jsx';
import React from 'react';
export default function Digit({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: calcActions.ADD, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
