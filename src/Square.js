import React, { useState } from 'react';
import './style.css';

export default function Square({ putValue, value, number }) {
  // const [value, setValue] = useState();
  // const [player, setPlayer] = useState(1);
  // function putValue() {
  //   if (player == 1) {
  //     setValue(0);
  //     setPlayer(2);
  //   } else {
  //     setValue('X');
  //     setPlayer(1);
  //   }
  // }
  return (
    <span
      onClick={() => {
        putValue(number);
      }}
      style={{
        height: '50px',
        backgroundColor: 'yellow',
        width: '50px',
        display: 'inline-block',
        border: '1px solid '
      }}
    >
      <h1>{value}</h1>
    </span>
  );
}
