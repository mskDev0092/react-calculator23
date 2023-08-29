import { calcActions } from './Calc.jsx';
import React from 'react';

export default function Operand({ dispatch, operation }) {
  return (
    <button
      onClick={() => dispatch({ type: calcActions.CHOOSE, payload: operation })}
    >
      {operation}
    </button>
  );
}
