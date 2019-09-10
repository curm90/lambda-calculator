import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

const Numbers = () => {
  const [ numberState ] = useState(numbers);

  return (
    <div className="numbers">
      {
        numberState.map(
          number => 
          <NumberButton 
            key={number} 
            value={number} 
          />
        )
      }
    </div>
  );
};

export default Numbers
