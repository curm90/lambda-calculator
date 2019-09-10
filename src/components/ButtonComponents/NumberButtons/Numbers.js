import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

const Numbers = () => {
  const [ numberState ] = useState(numbers);

  return (
    <div>
      {
        numberState.map(number => (<NumberButton number={number} key={number} value={number} />))
      }
    </div>
  );
};

export default Numbers
