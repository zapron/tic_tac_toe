import React, { useState } from 'react';
import './style.css';
import Square from './Square';

export default function App() {
  const initialState = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: ''
  };
  let [value, setValue] = useState(initialState);
  const [player, setPlayer] = useState(1);

  function putValue(id) {
    let x = value;
    if (player === 1 && value[id] === '') {
      x[id] = 'O';
      setValue(x);
      setPlayer(2);
    } else {
      if (value[id] === '') {
        x[id] = 'X';
        setValue(x);
        setPlayer(1);
      }
    }
  }

  function winLogic(player) {
    if (
      value[0] + value[1] + value[2] === player ||
      value[3] + value[4] + value[5] === player ||
      value[6] + value[7] + value[8] === player ||
      value[0] + value[3] + value[6] === player ||
      value[1] + value[4] + value[7] === player ||
      value[2] + value[5] + value[8] === player ||
      value[0] + value[4] + value[8] === player ||
      value[2] + value[4] + value[6] === player
    )
      return true;
    else return false;
  }

  function checkWhoWin() {
    if (winLogic('OOO')) {
      return <h1 style={{ color: 'green' }}>Player 1 wins</h1>;
    } else if (winLogic('XXX')) {
      return <h1 style={{ color: 'blue' }}>Player 2 wins</h1>;
    } else return <h1 style={{ color: 'red' }}>Nobody wins</h1>;
  }

  console.log(value);

  return (
    <>
      <div>
        <Square number="0" putValue={putValue} value={value[0]} />
        <Square number="1" putValue={putValue} value={value[1]} />
        <Square number="2" putValue={putValue} value={value[2]} />
      </div>
      <div>
        <Square number="3" putValue={putValue} value={value[3]} />
        <Square number="4" putValue={putValue} value={value[4]} />
        <Square number="5" putValue={putValue} value={value[5]} />
      </div>
      <div>
        <Square number="6" putValue={putValue} value={value[6]} />
        <Square number="7" putValue={putValue} value={value[7]} />
        <Square number="8" putValue={putValue} value={value[8]} />
      </div>
      <p>
        Player <b style={{ color: 'red' }}>{player}</b> turn
      </p>
      <button
        onClick={() => {
          setValue(initialState);
          setPlayer(1);
        }}
      >
        Reset
      </button>
      <hr />
      <h3>{checkWhoWin()}</h3>
    </>
  );
}
