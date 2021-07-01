import React, { useState } from 'react';
import './style.css';

export default function Square({ putValue, value, number }) {
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
