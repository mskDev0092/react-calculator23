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
    case calcActions.ADD:
      if (state.overwrite) {
        return {
          ...state,
          currOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit == '.' && state.currOperand.includes('.')) {
        return state;
      }
      if (payload.digit == '0' && state.currOperand == '0') {
        return state;
      }
      return {
        ...state,
        currOperand: `${state.currOperand || ''}${payload.digit}`,
      };

    case calcActions.CHOOSE:
      if (state.currOperand == null && state.prevOperand == null) {
        return state;
      }
      if (state.prevOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOperand: state.currOperand,
          currOperand: null,
        };
      }
      return {
        ...state,
        operation: payload.operation,
        prevOperand: valuate(state),
        currOperand: null,
      };

    case calcActions.CLEAR:
      return {};

    case calcActions.DEL:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currOperand: null,
        };
      }
      if (state.currOperand === null) {
        return state;
      }
      if (state.currOperand.length === 1) {
        return {
          ...state,
          currOperand: null,
        };
      }
      return {
        ...state,
        currOperand: state.currOperand.slice(0, -1),
      };

    case calcActions.CHECK:
      if (
        state.operation == null ||
        state.currOperand == null ||
        state.prevOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        operation: null,
        prevOperand: null,
        currOperand: valuate(state),
      };
  }
};

const INT_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

function valuate({ currOperand, prevOperand, operation }) {
  const curr = parseFloat(currOperand);
  const prev = parseFloat(prevOperand);

  if (isNaN(curr) || isNaN(prev)) return '';
  let calc = '';
  switch (operation) {
    case '/':
      calc = prev / curr;
      break;
    case '*':
      calc = prev * curr;
      break;
    case '+':
      calc = prev + curr;
      break;
    case '-':
      calc = prev - curr;
      break;
  }
  return calc.toString();
}

function pushOperand(operand) {
  if (operand == null) return;
  const [int, dec] = operand.split('.');
  if (dec == null) return INT_FORMATTER.format(int);
  return `${INT_FORMATTER.format(int)}.${dec}`;
}

export default function Calc() {
  const [{ currOperand, prevOperand, operation }, dispatch] = useReducer(
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
            <div className="prev">
              {pushOperand(currOperand)} {operation}
            </div>
            <div className="curr">{pushOperand(currOperand)}</div>
          </div>
        </div>
        <div className="btn-prim">
          <button
            className="span1"
            id="clear"
            onClick={() => dispatch({ type: calcActions.CLEAR })}
          >
            AC
          </button>
          <button onClick={() => dispatch({ type: calcActions.DEL })}>
            Del
          </button>

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
          <Digit id="decimal" digit="." dispatch={dispatch} />

          <button
            className="span2"
            id="equals"
            onClick={() => dispatch({ type: calcActions.CHECK })}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
